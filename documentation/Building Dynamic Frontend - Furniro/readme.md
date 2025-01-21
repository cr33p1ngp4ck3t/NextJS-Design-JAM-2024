# Dynamic Frontend Components for Your Marketplace

## **Introduction**
This document provides a comprehensive overview of the frontend development for your marketplace application. The primary focus was on building dynamic, reusable components and ensuring a responsive user interface. The project also integrated dynamic routing and state management to display data fetched from an external API.

## **Component Overview**

### **Key Components Developed:**
- **ProductCard**
  - Displays product details (e.g., name, price, image).
  - Reusable across pages like product listing and related products sections.
  - Dynamically fetches data from Sanity CMS.
  ![alt text](Screenshot_21-1-2025_225439_localhost.jpeg)
- **CategoryFilter**
  - Allows users to filter products by categories dynamically.
  - Integrated with state management for seamless interaction.
  - Dynamically fetches categories from Sanity CMS.
  ![alt text](<image copy 2.png>)![alt text](<image copy.png>)
- **FeaturedProducts**
  - Highlights top or promotional products.
  - Fetches data dynamically from Sanity CMS.
- **AddToCart & CartContent**
  - Manages cart functionality.
  - Updates cart items dynamically with local state.
![alt text](image.png)
### **Additional Features:**
- Pagination and infinite scrolling for large datasets.
- Related products displayed on product detail pages.
![alt text](<image copy 3.png>)
## **Styling and Responsiveness**
- **Tailwind CSS** was used for styling, ensuring:
  - Mobile-first design.
  - Consistent and scalable CSS classes.
- All components were tested for:
  - Mobile, tablet, and desktop views.
  - Consistent user experience across screen sizes.

## **Dynamic Routing**
- Implemented using Next.js dynamic routes:
  - Example: `/product/[id]` displays individual product details.
  - `/category/[slug]` filters products by specific categories.
- Placeholder data used during development to test routes before API integration.

## **State Management**
- **React State and Context API:**
  - `useState` for local component-level state.
  - `useContext` for global state, such as user authentication and cart management.
- Example:
  ```jsx
  const [products, setProducts] = useState([]);
  const { cart, addToCart } = useContext(CartContext);
  ```

## **Challenges and Solutions**
- **Data Fetching Issues:**
  - **Problem:** Errors while fetching data from Sanity CMS.
  - **Solution:** Verified API keys and dataset configurations. Used mock data as a temporary fallback.
- **Responsive Design Adjustments:**
  - **Problem:** Inconsistent layouts on smaller screens.
  - **Solution:** Tweaked Tailwind CSS classes and tested using browser developer tools.
- **Dynamic Routing Errors:**
  - **Problem:** Routes failed for invalid IDs or slugs.
  - **Solution:** Added error handling and fallback pages in Next.js.

## **Checklist Validation**
- **Frontend Component Development:** ✔
- **Styling and Responsiveness:** ✔
- **Code Quality:** 70% (Areas for improvement: variable naming consistency, code comments).
- **Documentation and Submission:** ✔
- **Final Review:** ✔
