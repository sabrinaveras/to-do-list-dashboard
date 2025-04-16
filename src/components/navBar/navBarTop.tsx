import { CalenderIcon, NotificationIcon, ProfileIcon, SearchIcon } from "@/design/icons";

export const NavBarTop = () => {
  return (
    <div className="w-full h-[94px] flex justify-between items-center px-[32px]">
      <div>
        <h2>Welcome back, Vincent</h2>
      </div>
      <div className="flex items-center gap-[22px]">
        <SearchIcon />

        <NotificationIcon notification={true} />

        <div className="flex items-center gap-[3px]">
          <CalenderIcon fill="var(--color-dark)" />
          <span className="">19 May 2022</span>
        </div>

        <ProfileIcon />
      </div>
    </div>
  );
};
