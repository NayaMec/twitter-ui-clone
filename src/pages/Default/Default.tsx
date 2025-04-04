import { Outlet } from "react-router-dom";
import { SideBar } from "../../components/SideBar/SideBar";

export const Default = () => {
  return (
    <div className="layout">
      <SideBar />
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
};
