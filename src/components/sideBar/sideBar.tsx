import { Select } from "../select";

export const SideBar = () => {
  const projectOptions = [
    { id: "all", label: "All projects (3)" },
    { id: "design", label: "Design system", selected: true },
    { id: "flow", label: "User flow" },
    { id: "research", label: "UX research" },
  ];

  const taskOptions = [
    { id: "all", label: "All tasks (3)" },
    { id: "toDo", label: "To do" },
    { id: "inProgress", label: "In progress", selected: true },
    { id: "done", label: "Done" },
  ];

  return (
    <div className="bg-side-panel px-[28px] flex flex-col gap-[28px]">
      <Select label="Team" options={[]} onChange={() => console.log("TODO")} />
      <Select
        label="Projects"
        options={projectOptions}
        onChange={(option) => console.log("Selected:", option)}
      />
      <Select label="Tasks" options={taskOptions} onChange={() => console.log("TODO")} />
      <Select label="Reminders" options={[]} onChange={() => console.log("TODO")} />
      <Select label="Messengers" options={[]} onChange={() => console.log("TODO")} />
    </div>
  );
};
