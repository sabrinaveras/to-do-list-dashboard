import { useState } from "react"

interface SelectProps{
    label: string;
    options: Option[];
    onChange: (option: Option) => void;
}

interface Option{
    id: string;
    label: string;
    selected?: boolean;
}

export const Select = ({ label, options, onChange }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false)
    // const [selectedOption, setSelectedOption] = useState<Option[]>(options.filter(option => option.selected))

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option: Option) => {
        onChange(option);
        // setSelectedOption([option])
        setIsOpen(false)
    }

    return (
        <div className="relative w-[64px] h-[32px]">
            <button type="button" onClick={toggleDropdown}
            className="flex items-center justify-between w-full px-[4px] py-[2px] bg-nav-bar-dark"
            >
                <span>{label}</span>
            </button>

            {/* dropdown */}
            {
                isOpen && (
                    <div className="absolute z-10 w-full mt-[1px] rounded-md shadow-lg bg-white">
                        <div className="relative py-[2px]">
                            {/* vertical line */}
                            <div className="absolute left-[6px] top-[0px] bottom-[0px] w-px"></div>

                            {/* options */}
                            <ul>
                                {
                                    options.map((option) => {
                                        return (
                                            <li key={option.id} onClick={() => handleOptionClick(option)}
                                            className="relative flex items-center px-[4px] py-[2px] cursor-pointer"
                                            >
                                                <div className="absolute left-[6px] top-1/2 w-[4px] h-px"></div> 
                                                <span className="ml-[10px]">{option.label}</span>

                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                    </div>
                )
            }
        </div>
    )
}