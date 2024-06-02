import React from "react";
import ProfileImage from "../../assets/images/ProfileImage.png";
import CandidateProfilePhone from "../../assets/images/CandidateProfilePhone.png";
import CandidateProfileMail from "../../assets/images/CandidateProfileMail.png";
import EditProfilePen from "../../assets/icons/EditProfilePen";
import ResumeIcon from "../../assets/icons/ResumeIcon";
import ResumeEditPen from "../../assets/icons/ResumeEditPen";
import ResumeCompleteTick from "../../assets/images/ResumeCompleteTick.png";
import Skill from "./Skill";
import Button from "@mui/material/Button";
import EditCandidateProfile from "./EditCandidateProfile";
import "./CandidateProfilePage.scss";

function CandidateProfilePage() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="candidate_profile_page_container">
      <div className="candidate-profile-top-container">
        <img className="candidate-profile-image" src={ProfileImage} />
        <div className="candidate-profile-text-container">
          <div className="candidate-profile-name-contianer">
            <h1 className="candidate-profile-name">Elina Downey</h1>
            <p className="candidate-profile-domain">React Developer</p>
          </div>
          <div className="candidate-profile-details-outer-contianer">
            <div className="candidate-profile-email-contianer">
              <img
                className="candidate-profile-email-img"
                src={CandidateProfileMail}
              />
              <p className="candidate-profile-email-text">elina@gmail.com</p>
            </div>

            <div className="candidate-profile-email-contianer">
              <img
                className="candidate-profile-email-img"
                src={CandidateProfilePhone}
              />
              <p className="candidate-profile-email-text">1234567890</p>
            </div>
          </div>
        </div>
      </div>

      <div className="candidate-profile-bottom-container">
        <div className="candidate-profile-bottom-left-container">
          <div className="candidate-profile-bottom-left-upper-container">
            <div className="candidate-profile-heading-container">
              <h1 className="candidate-profile-heading">Profile</h1>
              <Button
                onClick={handleOpen}
                className="candidate-profile-edit-image"
                sx={{
                  minWidth: "24px",
                  padding: "0",
                }}
              >
                <EditProfilePen />
              </Button>
            </div>
            <h2 className="candidate-profile-sub-heading">Personal Details</h2>

            <div className="candidate-profile-heading-personal-container">
              <div className="candidate-profile-heading-personal">
                <p className="candidate-profile-heading-personal-para">
                  <b>Full Name :</b>
                  <span className="candidate-profile-heading-personal-span">
                    Robert Downey
                  </span>
                </p>
                <p className="candidate-profile-heading-personal-para">
                  <b>Date of Birth :</b>
                  <span className="candidate-profile-heading-personal-span">
                    01/02/1982
                  </span>
                </p>
              </div>

              <div className="candidate-profile-heading-personal">
                <p className="candidate-profile-heading-personal-para">
                  <b>Gender :</b>
                  <span className="candidate-profile-heading-personal-span">
                    Female
                  </span>
                </p>
                <p className="candidate-profile-heading-personal-para">
                  <b>Role :</b>
                  <span className="candidate-profile-heading-personal-span">
                    React Developer
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="candidate-profile-bottom-left-lower-container">
            <h1 className="candidate-profile-heading">Resume</h1>
            <div className="candidate-profile-resume-container">
              <div className="container-line"></div>
              <ResumeIcon />
              <div className="candidate-profile-resume-details-container">
                <p className="candidate-profile-resume-name">resume-01.pdf</p>
                <p className="candidate-profile-resume-size">
                  100kb<span>.</span>complete
                </p>
              </div>
              <div className="candidate-profile-edit-resume-container">
                <Button
                  className="candidate-profile-edit-resume-btn"
                  sx={{
                    minWidth: "24px",
                    padding: "0",
                  }}
                >
                  <ResumeEditPen />
                </Button>
                <img
                  className="candidate-profile-edit-resume-tick"
                  src={ResumeCompleteTick}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="candidate-profile-bottom-right-container">
          <div className="candidate-profile-carrier-objective-container">
            <h1 className="candidate-profile-heading">Carrier Objective</h1>
            <p className="candidate-profile-carrier-objective-para">
              Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
              consectetur.tur.v.
            </p>
          </div>
          <div className="candidate-profile-skills-container">
            <h1 className="candidate-profile-heading">Skills</h1>
            <div className="candidate-profile-skills-section">
              <Skill skillname="Java" />
              <Skill skillname="JavaScript" />
              <Skill skillname="Python" />
              <Skill skillname="C++" />
              <Skill skillname="React JS" />
              <Skill skillname="Creativity" />
              <Skill skillname="Work ethic" />
              <Skill skillname="Leadership" />
            </div>
          </div>
        </div>
      </div>

      <EditCandidateProfile open={open} handleClose={handleClose} />
    </div>
  );
}

export default CandidateProfilePage;
