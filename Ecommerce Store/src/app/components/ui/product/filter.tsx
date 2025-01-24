import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import '@/app/styles/globals.css'

interface FilterProps {
  onFilterChange: (filterQuery: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  return (
    <div>
      <Select onValueChange={(value) => onFilterChange(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort</SelectLabel>
            <SelectItem value="name asc">A → Z</SelectItem>
            <SelectItem value="name desc">Z → A</SelectItem>
            <SelectItem value="price asc">Price: Low → High</SelectItem>
            <SelectItem value="price desc">Price: High → Low</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
