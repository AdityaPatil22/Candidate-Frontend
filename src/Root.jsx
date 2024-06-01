import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

import "./Root.scss";
import "./assets/styles/global.scss";

export default function Root() {
  return (
    <div className="main-section">
      <div className="sidebar_section">
        <Sidebar />
      </div>

      <div className="content_wrapper">
        <Header />
        <div className="content_section">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
