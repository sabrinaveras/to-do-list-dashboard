import { useState } from "react";

import { BoardViewIcon, PlusIcon } from "@/design/icons";
import { Button } from "../button";
import { NavBarTop } from "../navBar";
import { Card } from "../card";
import { Menu } from "../menu";
import { Draggable, Droppable } from "../dragAndDrop";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

interface Container {
  id: string;
  label: string;
  cards: string[];
}

export const Dashboard = () => {
  const [containers, setContainers] = useState<Container[]>([
    {
      id: "A",
      label: "To do",
      cards: ["Card 1", "Card 2", "Card 3"],
    },
    {
      id: "B",
      label: "In progress",
      cards: ["Card 1"],
    },
    {
      id: "C",
      label: "Done",
      cards: ["Card 1", "Card 2"],
    },
  ]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const activeContainer = containers.find((container) =>
        container.cards.some((_, index) => `${container.id}-${index}` === active.id)
      );

      const overContainer = containers.find((container) => container.id === over.id);

      if (activeContainer && overContainer) {
        const activeIndex = activeContainer.cards.findIndex(
          (_, index) => `${activeContainer.id}-${index}` === active.id
        );

        const cardToMove = activeContainer.cards[activeIndex];

        setContainers(
          containers.map((container) => {
            if (container.id === activeContainer.id) {
              return {
                ...container,
                cards: container.cards.filter((_, index) => index !== activeIndex),
              };
            }
            if (container.id === overContainer.id) {
              return {
                ...container,
                cards: [...container.cards, cardToMove],
              };
            }
            return container;
          })
        );
      }
    }
  };

  const addCard = (containerId: string) => {
    setContainers(
      containers.map((container) => {
        if (container.id === containerId) {
          return {
            ...container,
            cards: [...container.cards, `Card ${container.cards.length + 1}`],
          };
        }
        return container;
      })
    );
  };

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

      <div className="h-full flex gap-[25px] my-[20px]">
        <DndContext onDragEnd={handleDragEnd}>
          {containers.map((container) => (
            <Droppable
              key={container.id}
              id={container.id}
              label={container.label}
              totalCards={container.cards.length}
              addCard={addCard}
            >
              <div className="flex flex-col gap-[16px]">
                {container.cards.map((_, index) => (
                  <Draggable key={`${container.id}-${index}`} id={`${container.id}-${index}`}>
                    <Card />
                  </Draggable>
                ))}
              </div>
            </Droppable>
          ))}
        </DndContext>
      </div>
    </div>
  );
};
