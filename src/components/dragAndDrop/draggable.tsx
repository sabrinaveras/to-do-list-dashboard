import { useDraggable } from "@dnd-kit/core";
import { ReactNode } from "react";

interface DraggableProps {
  id: string;
  children: ReactNode;
}

export const Draggable = ({ id, children }: DraggableProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </button>
  );
};
