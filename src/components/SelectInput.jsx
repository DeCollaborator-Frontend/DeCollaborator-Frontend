import React, { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import styles from "./SelectInput.module.css";

const SelectInput = ({
  placeholder = "",
  options = [],
  hasBackground = true,
  hasBorder = true,
  // value = options[0] || "Select an option",
  defaultSelection = "",
}) => {
  const [selectedOption, setSelectedOption] = useState(
    options[0] || "Select an option",
  );

  function handleSelectOption(option) {
    setSelectedOption(option);
  }
  return (
    <div className={styles.select}>
      <Select
        onValueChange={(value) => {
          console.log(value);
          handleSelectOption(value);
        }}
        value={selectedOption || ""}
      >
        <SelectTrigger
          className={`!focus:ring-0 w-fit min-w-28 rounded-md ${hasBorder ? "border-2 border-neutral-700" : "border-0"}  ${hasBackground ? "bg-neutral-900" : ""} font-semibold text-white`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent
          className={`rounded-md  ${hasBorder ? "border-2 border-neutral-700" : "border-0"} ${hasBackground ? "bg-neutral-900" : ""} font-semibold text-white`}
        >
          {options.map((option) => (
            <SelectItem
              key={option}
              className="hover:bg-neutral-800"
              value={option}
            >
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectInput;
