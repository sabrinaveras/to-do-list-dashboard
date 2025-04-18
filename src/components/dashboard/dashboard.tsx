import { BoardViewIcon, PlusIcon } from "@/design/icons";
import { Button } from "../button";
import { NavBarTop } from "../navBar";
import { Card } from "../card";
import { Menu } from "../menu";

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
          <Menu />
          <Button label="New template" />
        </div>
      </div>

      <div>
        <Card />
      </div>
    </div>
  );
};
