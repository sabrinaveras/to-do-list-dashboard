import {
  BoardIcon,
  CalenderIcon,
  ExitIcon,
  LogoIcon,
  MapIcon,
  MenuIcon,
  PersonIcon,
  SettingIcon,
  UploadIcon,
} from "@/design/icons";
import { ReactNode } from "react";

export const NavBarLeft = () => {
  return (
    <div className="bg-nav-bar-dark pt-[24px] flex flex-col items-center">
      <div className="flex justify-center gap-[8px] mb-[40px]">
        <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
        <div className="w-[6px] h-[6px] bg-white opacity-40 rounded-full"></div>
        <div className="w-[6px] h-[6px] bg-white opacity-20 rounded-full"></div>
      </div>

      <div className="flex flex-col gap-[40px]">
        <NavIcon isSelected={false} Icon={<LogoIcon />} />
        <NavIcon isSelected={true} Icon={<MenuIcon />} />
        <NavIcon isSelected={false} Icon={<PersonIcon />} />
        <NavIcon isSelected={false} Icon={<CalenderIcon />} />
        <NavIcon isSelected={false} Icon={<BoardIcon />} />
        <NavIcon isSelected={false} Icon={<UploadIcon />} />
        <NavIcon isSelected={false} Icon={<MapIcon />} />
        <NavIcon isSelected={false} Icon={<SettingIcon />} />
      </div>

      <div className="flex items-end h-full mb-[44px] cursor-pointer">
        <ExitIcon />
      </div>
    </div>
  );
};

const NavIcon = ({ isSelected, Icon }: { isSelected: boolean; Icon: ReactNode }) => {
  return (
    <div className={`${isSelected ? "bg-white-10" : ""} rounded-full p-[12px] cursor-pointer`}>
      {Icon}
    </div>
  );
};
