import { Arrow } from "@/design/icons";
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
  // const [selectedOption, setSelectedOption] = useState<Option[]>(options.filter(option => option.selected))

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    onChange(option);
    // setSelectedOption([option])
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full px-[4px] py-[2px] mb-[8px] font-medium text-base"
      >
        <div className="flex flex-col items-start">
          <span className="font-medium">{label}</span>
        </div>
        <div
          className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <Arrow />
        </div>
      </button>

      {/* dropdown */}
      <div
        className={`absolute z-[10px] w-full mt-[1px] bg-white transform transition-all duration-200 ease-in-out ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-95 pointer-events-none"}`}
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
