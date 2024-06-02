import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
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
      onClick={handleClose}
    >
      <div className="edit-candidate-profile-main-continer">
        <h1 className="edit-candidate-profile-heading">Edit Profile</h1>
      </div>
    </Backdrop>
  );
}

export default EditCandidateProfile;
