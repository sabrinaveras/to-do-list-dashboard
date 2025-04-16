import { Select } from "../select";

export const SideBar = () => {
  const projectOptions = [
    { id: "all", label: "All projects (3)" },
    { id: "design", label: "Design system", selected: true },
    { id: "flow", label: "User flow" },
    { id: "research", label: "UX research" },
  ];

  return (
    <div className="bg-side-panel px-[28px]">
      <Select
        label="Projects"
        options={projectOptions}
        onChange={(option) => console.log("Selected:", option)}
      />
    </div>
  );
};
