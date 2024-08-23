import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectInput = ({ options }) => {
  return (
    <Select>
      <SelectTrigger className="min-w-28 rounded-xl border border-2 border-neutral-700 bg-neutral-950 font-semibold text-white">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="rounded-xl border border-2 border-neutral-700 bg-neutral-950 font-semibold text-white">
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectInput;
