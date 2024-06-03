import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import ResumeIcon from "../../assets/icons/ResumeIcon";
import ResumeEditPen from "../../assets/icons/ResumeEditPen";
import ResumeCompleteTick from "../../assets/images/ResumeCompleteTick.png";
import EditProfileSkill from "./EditProfileSkill"
import "./EditCandidateProfile.scss";

EditCandidateProfile.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

function EditCandidateProfile({ open, handleClose }) {
  return (
    <Backdrop
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        color: "#000",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={open}
    >
      <div className="edit-main-continer">
        <h1 className="edit-heading">Edit Profile</h1>
        <form action="/" method="POST">
          <div className="edit-outer-container">
            <div className="edit-inner-container">
              <label htmlFor="full-name" className="edit-label">
                Full Name
              </label>
              <input id="full-name" type="text" className="edit-input"></input>
            </div>
            <div className="edit-inner-container">
              <label htmlFor="gender" className="edit-label">
                Gender
              </label>
              <select id="gender" className="edit-input">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="edit-outer-container">
            <div className="edit-inner-container">
              <label htmlFor="full-name" className="edit-label">
                Email
              </label>
              <input id="email" type="email" className="edit-input"></input>
            </div>
            <div className="edit-inner-container">
              <label htmlFor="full-name" className="edit-label">
                Mobile No.
              </label>
              <input id="phn-number" type="number" className="edit-input"></input>
            </div>
          </div>

          <div className="edit-outer-container">
            <div className="edit-inner-container">
              <label htmlFor="full-name" className="edit-label">
                Title
              </label>
              <input id="title" type="text" className="edit-input"></input>
            </div>
            <div className="edit-inner-container">
              <label htmlFor="full-name" className="edit-label">
                Date of Birth
              </label>
              <input id="date-of-birth" type="date" className="edit-input"></input>
            </div>
          </div>

          <div className="edit-form-carrier-objective">
            <div className="edit-inner-container">
              <label htmlFor="full-name" className="edit-label">
                Carrier Objective
              </label>
              <textarea id="carrier-objective" className="edit-input"></textarea>
            </div>
          </div>

          <div className="edit-form-skills-container">
            <h1 className="edit-heading" style={{ marginTop: "20px" }}>
              Skills
            </h1>
            <div className="edit-inner-container">
              <label htmlFor="full-name" className="edit-label">
                Add Skill
              </label>
              <input type="text" className="edit-input"></input>
            </div>
            <div className="skills-tab">
            <EditProfileSkill editskillname="Java"/>
            <EditProfileSkill editskillname="Python"/>
            <EditProfileSkill editskillname="React"/>
            </div>
          </div>

          <div className="edit-form-resume-container">
            <h1 className="edit-heading" style={{ marginTop: "20px" }}>
              Resume
            </h1>
            <div className="resume-container">
              <div className="container-line"></div>
              <ResumeIcon />
              <div className="resume-details-container">
                <p className="resume-name">resume-01.pdf</p>
                <p className="resume-size">
                  100kb<span>.</span>complete
                </p>
              </div>
              <div className="edit-resume-container">
                <Button
                  className="edit-resume-btn"
                  sx={{
                    minWidth: "24px",
                    padding: "0",
                  }}
                >
                  <ResumeEditPen />
                </Button>
                <img className="edit-resume-tick" src={ResumeCompleteTick} />
              </div>
            </div>
          </div>

          <div className="edit-form-btn-contianer">
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{
              border: "solid 1px #5C27C0",
              color: "#5C27C0",
              marginTop: "14px",
              borderRadius: "4px",
              width: "130px",
              height: "40px",
              fontWeight: "400",
              textTransform: "capitalize",
              background: "#fff",

              "&:hover": {
                background: "#5C27C0",
                color: "#fff",
                border: "solid 1px #5C27C0",
              },
            }}>
            Cancel
          </Button>

          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{
              border: "solid 1px #5C27C0",
              color: "#fff",
              marginTop: "14px",
              borderRadius: "4px",
              width: "130px",
              height: "40px",
              fontWeight: "400",
              textTransform: "capitalize",
              background: "#5C27C0",

              "&:hover": {
                background: "#fff",
                color: "#5C27C0",
                border: "solid 1px #5C27C0",
              },
            }}>
            Update
          </Button>  
          </div>
        </form>
      </div>
    </Backdrop>
  );
}

export default EditCandidateProfile;
