
import PropTypes from 'prop-types';
import "./Skill.scss"

Skill.propTypes = {
    skillname: PropTypes.string.isRequired,
};

function Skill({ skillname }){
    return(
        <div className="skill-box">
            <p className="skill">{ skillname }</p>
        </div>
    )
}

export default Skill