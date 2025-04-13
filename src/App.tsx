import { Dashboard } from "./components/dashboard"
import { NavBar } from "./components/navBar"
import { SideBar } from "./components/sideBar"

const App = () => {

  return (
      <div className="grid grid-cols-[90px_318px_1fr] h-screen w-full">
        <NavBar />
        <SideBar/>
        <Dashboard/>
      </div>
  ) 
}

export default App
