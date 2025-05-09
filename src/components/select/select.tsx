import { ArrowIcon } from "@/design/icons";
import { useState } from "react";

interface SelectProps {
  label: string;
  options: Option[];
  onChange: (option: Option) => void;
}

interface Option {
  id: string;
  label: string;
  selected?: boolean;
}

export const Select = ({ label, options, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasOptions = options.length > 0;

  const toggleDropdown = () => {
    if (!hasOptions) return;
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={toggleDropdown}
        disabled={!hasOptions}
        className={`flex items-center justify-between w-full px-[4px] py-[2px] mb-[8px] text-base
          ${!hasOptions ? "cursor-not-allowed text-gray-400" : "font-medium cursor-pointer"}`}
      >
        <div className="flex flex-col items-start">
          <span className={`font-medium ${!hasOptions ? "opacity-50" : ""}`}>{label}</span>
        </div>
        <div
          className={`transform transition-transform duration-200 ${!hasOptions ? "opacity-50" : ""} ${isOpen ? "rotate-180" : ""}`}
        >
          <ArrowIcon />
        </div>
      </button>

      <div
        className={`w-full bg-white overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-[0px] opacity-[0px]"}`}
      >
        <div className="relative py-[12px]">
          {/* vertical line */}
          <div className="absolute left-[6px] top-[0px] bottom-[0px] w-[2px] bg-grey"></div>

          {/* options */}
          <ul className="space-y-1">
            {options.map((option) => (
              <li
                key={option.id}
                onClick={() => handleOptionClick(option)}
                className="relative flex items-center cursor-pointer group"
              >
                <div className="absolute left-[6px] top-1/2 w-[14px] h-[2px] bg-grey"></div>
                <span
                  className={`ml-[34px] px-[12px] py-[12px] text-sm transition-colors
                    ${option.selected ? "bg-grey rounded-full" : "text-gray-600 hover:text-gray-900"}`}
                >
                  {option.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
