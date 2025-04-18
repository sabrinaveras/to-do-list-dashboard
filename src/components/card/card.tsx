import { AttachmentIcon, CommentIcon, HamburgerIcon } from "@/design/icons";
import { Menu } from "../menu";

export const Card = () => {
  return (
    <div className="w-[320px] h-[178px] bg-card-light border-solid border-grey border-[3px] rounded-[12px] flex flex-col p-[20px] justify-between">
      {/* header */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start">
          <span>Create ui kit for layout</span>
          <caption className="color-custom-dark-50">Crypto mobile app </caption>
        </div>
        <Menu />
      </div>

      {/* body */}
      <div className="flex flex-col gap-[5px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[4px]">
            <HamburgerIcon />
            <span>Progress</span>
          </div>

          <div>
            <span>3/10</span>
          </div>
        </div>
        <div className="w-full h-[4px] bg-grey rounded-full">
          <div className="w-[50%] h-[4px] bg-orange rounded-full"></div>
        </div>
      </div>

      {/* footer */}
      <div className="flex justify-between items-center">
        <div className="bg-orange-10 py-[12px] px-[16px] rounded-full flex items-center justify-center">
          <span className="color-custom-orange">15 Nov 2025</span>
        </div>

        <div className="flex gap-[12px]">
          <div className="flex gap-[4px]">
            <CommentIcon />
            <span>23</span>
          </div>
          <div className="flex gap-[4px]">
            <AttachmentIcon />
            <span>12</span>
          </div>
        </div>
      </div>
    </div>
  );
};
