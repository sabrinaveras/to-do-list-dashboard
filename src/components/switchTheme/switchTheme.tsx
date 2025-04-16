import { MoonIcon, SonIcon } from "@/design/icons";

export const SwitchTheme = () => {
  return (
    <div className="flex items-center gap-[2px] bg-grey p-[8px] rounded-full justify-between">
      <button className="flex items-center gap-[2px] bg-white rounded-full py-[8px] px-[32px]">
        <SonIcon />
        <span className="text-sm font-medium">Light</span>
      </button>
      <button className="flex items-center rounded-full gap-[2px] py-[8px] px-[32px]">
        <MoonIcon />
        <span className="text-sm font-medium">Dark</span>
      </button>
    </div>
  );
};
