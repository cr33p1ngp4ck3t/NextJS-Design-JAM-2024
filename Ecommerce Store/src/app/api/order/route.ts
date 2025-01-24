import { writeClient } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid'

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items } = body;

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { message: "Invalid order data" },
        { status: 400 }
      );
    }

    const updatedProducts = [];
    for (const { productId, quantity } of items) {
      const product = await writeClient.fetch(
        groq`*[_type == "product" && _id == $productId][0]`,
        { productId }
      );

      if (!product) {
        return NextResponse.json(
          { message: `Product with ID ${productId} not found` },
          { status: 404 }
        );
      }

      if (product.quantity < quantity) {
        return NextResponse.json(
          { message: `Insufficient stock for product ${product.name}` },
          { status: 400 }
        );
      }

      await writeClient
        .patch(productId)
        .dec({ quantity })
        .commit();

        
        updatedProducts.push({
        _key: uuidv4(),
        product: { _type: "reference", _ref: productId },
        quantity,
      });
    }
    const orderId = uuidv4();

    const order = await writeClient.create({
      _type: "order",
      orderId,
      items: updatedProducts,
      status: "pending",
    });

    return NextResponse.json({ order }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error processing order" },
      { status: 500 }
    );
  }
}
