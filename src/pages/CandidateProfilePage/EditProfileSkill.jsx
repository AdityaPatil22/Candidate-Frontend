import CloseIcon from "../../assets/icons/CloseIcon"
import PropTypes from "prop-types";
import "./EditProfileSkill.scss"

EditProfileSkill.propTypes = {
    editskillname: PropTypes.string.isRequired,
}


function EditProfileSkill({editskillname}){
    return(
        <div className="edit-profile-skill">
            <p className="edit-skill">{editskillname}</p>
            <button className="edit-skill-btn">
                <CloseIcon/>
            </button>
            
        </div>
    )
}

export default EditProfileSkill