import history from "../../assets/images/history.svg";
import common from "../../assets/images/common.svg";
import location from "../../assets/images/location.svg";
import code from "../../assets/images/code.svg";
import language from "../../assets/images/language.svg";
import google from "../../assets/images/Google.svg";
import { Button } from "@mui/material";
import download from "../../assets/images/download.svg";
import "./index.scss";


function InterviewDetails() {
  return (
    <>
      <div className="combined-candidate-information">
        <div className="candidate-information-header">
          <div className="candidate-designation">
            <h1>React Developer</h1>
            <h3>Front-end Developer</h3>
          </div>
          <div className="download-job-description">
            <div className="jdbtn">
              <Button
                variant="outlined"
                className="help-support-btn"
                sx={{
                  border: "solid 1px #5C27C0",
                  color: "#ffffff",
                  background: "#5C27C0",
                  borderRadius: "8px",
                  margin: "0px !important",
                  width: "70px",
                  height: "32px",
                  gap: "5px",
                  //   width: "209px",
                  //   height: "57px",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  marginLeft: "25px",
                  marginTop: "auto",
                  "&:hover": {
                    border: "solid 1px #5C27C0",
                    color: "#fff",
                    background: "#5C27C0",
                  },
                }}
              >
                <img src={download} alt="" />
                <p>JD</p>
              </Button>
            </div>
          </div>
        </div>
        <div className="candidate-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          doloribus necessitatibus at, voluptatum cum accusantium aut laboriosam
          corporis ullam ut numquam dolore quo ipsam cumque itaque fugit qui hic
          ducimus assumenda reprehenderit! Dolorum, itaque!
        </div>
        <div className="important-keywords-job-role">
          <div className="keywords" style={{ background: "#EBEBEB" }}>
            <img src={history} alt="" />
            <p>full time</p>
          </div>
          <div className="keywords">
            <img src={common} alt="" />
            <p>1-2 years</p>
          </div>
          <div className="keywords">
            <img src={location} alt="" />
            <p>Delhi,india</p>
          </div>
          <div className="keywords">
            <img src={code} alt="" />
            <p>Coding Round | yes</p>
          </div>
          <div className="keywords">
            <img src={language} alt="" />
            <p>English</p>
          </div>
        </div>
        <div className="mandatoryskills">
          <h2>Mandatory Skills</h2>
          <div className="skill-container">
            <div className="skills">
              <p>React</p>
            </div>
            <div className="skills">
              <p>Node js</p>
            </div>
            <div className="skills">
              <p>Javascript</p>
            </div>
          </div>
        </div>
        <div className="date-time-container">
          <p>
            Date:<b> 28 May 2024</b>
          </p>
          <p>
            Time:<b> 15 : 30</b>
          </p>
          <p>
            Interview Format:<b>AI Interview (Video Call)</b>
          </p>
        </div>
        <div className="company-details">
          <h2>Company Details</h2>
          <div className="company-details-container">
            <div className="company-logo">
              <img src={google} alt="" />
            </div>
            <div className="company-name">
              <h3>Google</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever.
              </p>
            </div>
          </div>
        </div>

        <div className="interview-tips">
          <h3>Interview Tips</h3>
          <div className="left-right-tips">
            <div className="left-tips">
              <li>Research the company & role.</li>
              <li>Practice common interview questions.</li>
              <li>Dress professionally.</li>
            </div>
            <div className="right-tips">
              <li>Arrive early (virtually or in-person).</li>
              <li>Be confident and enthusiastic.</li>
              <li>Follow up after the interview.</li>
            </div>
          </div>
        </div>
        <div className="start-instructions">
          <p>
            <i>*Please remember that this also includes coding round.</i>
          </p>
          <div className="main-instruction-for-start">
            <p>
              Click on <b>“Start”</b> to give the interview.
            </p>
          </div>
        </div>
        <div className="back-and-start-buttons">
          <Button
            variant="outlined"
            className="help-support-btn"
            sx={{
              border: "solid 1px #5C27C0",
              color: "#5C27C0",
              background: "#fff",
              borderRadius: "8px",
              width: "170px",
              height: "50px",

              //   height: "57px",
              margin: "0px !important",
              fontWeight: "800",
              textTransform: "capitalize",
              marginLeft: "25px",
              marginTop: "auto",
              "&:hover": {
                border: "solid 1px #5C27C0",
                color: "#5C27C0",
                background: "#fff",
              },
            }}
          >
            <p style={{ fontSize: "20px" }}>Back</p>
          </Button>
          <Button
            variant="outlined"
            className="help-support-btn"
            sx={{
              border: "solid 1px #5C27C0",
              color: "#ffffff",
              background: "#5C27C0",
              borderRadius: "8px",
              margin: "0px !important",
              width: "170px",
              height: "50px",
              //   width: "209px",
              //   height: "57px",
              fontWeight: "600",
              textTransform: "capitalize",
              marginLeft: "25px",
              marginTop: "auto",
              "&:hover": {
                border: "solid 1px #5C27C0",
                color: "#5C27C0",
                background: "#fff",
              },
            }}
          >
            <p style={{ fontSize: "20px" }}>Start</p>
          </Button>
        </div>
      </div>
    </>
  );
}

export default InterviewDetails;
