import { BoardViewIcon, PlusIcon } from "@/design/icons";
import { Button } from "../button";
import { NavBarTop } from "../navBar";

export const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen bg-dashboard">
      <NavBarTop />

      <div className="flex justify-between items-center px-[32px]">
        <div className="flex items-center gap-[16px]">
          <div className="flex border-b-[3px] border-solid border-dark pb-[12px]">
            <span className="flex items-center gap-[4px]">
              <BoardViewIcon />
              Board view
            </span>
          </div>

          <div className="flex border-b-[3px] border-solid border-dark pb-[12px]">
            <span className="flex items-center gap-[4px]">
              <div className="w-[18px] h-[18px] flex bg-grey rounded-full items-center justify-center">
                <PlusIcon />
              </div>
              Add view
            </span>
          </div>
        </div>

        <div className="flex items-center gap-[16px]">
          <span>Filter</span>
          <span>Sort</span>
          <div className="flex items-center gap-[3px] border-[4px] border-solid border-grey rounded-full px-[6px] py-[12px]">
            <div className="w-[3px] h-[3px] bg-dark rounded-full"></div>
            <div className="w-[3px] h-[3px] bg-dark rounded-full"></div>
            <div className="w-[3px] h-[3px] bg-dark rounded-full"></div>
          </div>
          <Button label="New template" />
        </div>
      </div>
    </div>
  );
};
