import BreadCrumbs from "../breadCrumbs/index";
import ProfileImage from "../../assets/images/ProfileImage.png"
import "./Header.scss";

const breadCrumbs = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Candidate login",
    link: "/",
  },
  {
    id: 3,
    title: "Profile",
  },
];

function Header() {
  return (
    <div className="site_header">
      <BreadCrumbs breadCrumbsData={breadCrumbs} />
      <div className="header-profile-section">
        <p className="header-profile-name">Hello, Elina!</p>
        <div className="header-profile-img">
          <img src={ProfileImage} />
        </div>
      </div>
    </div>
  );
}

export default Header;
