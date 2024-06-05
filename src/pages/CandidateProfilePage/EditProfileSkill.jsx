import React from "react";
import CloseIcon from "../../assets/icons/CloseIcon";
import "./EditProfileSkill.scss";

function EditProfileSkill({ editskillname, onRemove }) {
  return (
    <div className="edit-profile-skill">
      <p className="edit-skill">{editskillname}</p>
      <button className="edit-skill-btn" onClick={onRemove}>
        <CloseIcon />
      </button>
    </div>
  );
}

export default EditProfileSkill;
