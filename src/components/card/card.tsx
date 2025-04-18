import { AttachmentIcon, CommentIcon, HamburgerIcon } from "@/design/icons";
import { Menu } from "../menu";

interface CardProps {
  totalTask: number;
  totalCompleted: number;
}

export const Card = ({ totalTask, totalCompleted }: CardProps) => {
  const progress = (totalCompleted / totalTask) * 100;

  console.log(progress);

  return (
    <div className="w-[320px] h-[178px] bg-card-light border-solid border-grey border-[3px] rounded-[12px] flex flex-col p-[20px] justify-between">
      {/* header */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start">
          <span className="color-custom-dark">Design new ui presentation</span>
          <caption className="color-custom-dark-50">Crypto mobile app </caption>
        </div>
        <Menu />
      </div>

      {/* body */}
      <div className="flex flex-col gap-[5px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[4px]">
            <HamburgerIcon />
            <span className="color-custom-dark-50">Progress</span>
          </div>

          <div>
            <span className="color-custom-dark-50">
              {totalCompleted}/{totalTask}
            </span>
          </div>
        </div>
        <div className="w-full h-[4px] bg-grey rounded-full">
          <div className={`w-[${progress}%] h-[4px] bg-orange rounded-full`}></div>
        </div>
      </div>

      {/* footer */}
      <div className="flex justify-between items-center">
        <div className="bg-orange-10 py-[12px] px-[16px] rounded-full flex items-center justify-center">
          <span className="color-custom-orange">15 Nov 2025</span>
        </div>

        <div className="flex gap-[12px]">
          <div className="flex gap-[4px]">
            <CommentIcon fill="var(--color-dark-50)" />
            <span className="color-custom-dark-50">23</span>
          </div>
          <div className="flex gap-[4px]">
            <AttachmentIcon fill="var(--color-dark-50)" />
            <span className="color-custom-dark-50">12</span>
          </div>
        </div>
      </div>
    </div>
  );
};
