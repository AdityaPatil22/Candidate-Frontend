import { Link } from "react-router-dom";
import ReworkLogo from "../../assets/icons/ReworkLogo";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import InterviewIcon from "../../assets/icons/InterviewIcon";
import { Button } from "@mui/material";

import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <ReworkLogo />
      </div>
      <nav className="navbar">
        <ul>
          <li className="active">
            <Link to="/">
              <ProfileIcon />
              Profile
            </Link>
          </li>
          <li>
            <Link to="/">
              <InterviewIcon />
              Interviews
            </Link>
          </li>
        </ul>
      </nav>
      <Button
        variant="outlined"
        className="help-support-btn"
        sx={{
          border: "solid 1px #DF3737",
          color: "#DF3737",
          background: "#fff",
          borderRadius: "8px",
          width: "209px",
          height: "57px",
          fontWeight: "600",
          textTransform: "capitalize",
          marginLeft: "25px",
          marginTop: "auto",
          "&:hover": {
            border: "solid 1px #DF3737",
            color: "#fff",
            background: "#DF3737",
          },
        }}
      >
        Log out
      </Button>
    </div>
  );
}

export default Sidebar;
