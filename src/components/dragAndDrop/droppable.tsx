import { PlusIcon } from "@/design/icons";
import { useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";

interface DroppableProps {
  id: string;
  children: ReactNode;

  label: string;
  totalCards: number;
  addCard: (containerId: string) => void;
}

export const Droppable = ({ id, children, label, totalCards, addCard }: DroppableProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="w-[360px] h-full flex flex-col gap-[16px] border-dashed border-[3px] rounded-[12px] color-custom-grey px-[13px] py-[22px]"
    >
      <div className="flex justify-between items-center">
        <span className="color-custom-dark-50">
          {label} ({totalCards})
        </span>

        <div className="flex items-center gap-[6px] cursor-pointer" onClick={() => addCard(id)}>
          <div className="w-[22px] h-[22px] bg-grey flex items-center justify-center rounded-full">
            <PlusIcon />
          </div>
          <span className="color-custom-dark-50">Add new task</span>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
};
