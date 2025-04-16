import { Dashboard } from "./components/dashboard";
import { NavBarLeft } from "./components/navBar";
import { SideBar } from "./components/sideBar";

const App = () => {
  return (
    <div className="grid grid-cols-[90px_318px_1fr] h-screen w-full">
      <NavBarLeft />
      <SideBar />
      <Dashboard />
    </div>
  );
};

export default App;
