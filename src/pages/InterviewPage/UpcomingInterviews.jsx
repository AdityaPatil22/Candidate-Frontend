import React from "react";
import "./UpcomingInterviews.scss";
import { Button } from "@mui/material";
import Google from "../../assets/images/Google G.png";

function UpcomingInterviews() {
  return (
    <>
      <div className="upcoming_interviews_main">
        <p>
          * Please note that you will only be able to go to the assessment page
          in the given time slot.
        </p>
        <div className="upcoming-interviews-sections">
          <div className="upcoming-interviews-company">
            <div className="company-logo-n-details">
              <div className="company-logo-section">
                <img src={Google} alt="logo" />
              </div>
              <div className="company-iterview-details">
                <div className="company-name">
                  <p>Google</p>
                  <p>React Developer</p>
                </div>
                <div className="interviews-details">
                  <span>AI Interview</span>
                  <span>Coding Round</span>
                  <span>Date: 30 May 24</span>
                  <span>Time: 15:30</span>
                </div>
              </div>
            </div>
            <div className="company-view-button">
              <Button
                sx={{
                  height: "46px",
                  width: "118px",
                  color: "#fff",
                  backgroundColor: "#5C27C0",
                  textTransform: "none",
                  fontSize: "20px",
                  fontWeight: "Medium",
                  fontFamily: "Inter",

                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#5C27C0",
                    border: "1px solid #5C27C0",
                  },
                }}
              >
                View
              </Button>
            </div>
          </div>
          <div className="upcoming-interviews-company">
            <div className="company-logo-n-details">
              <div className="company-logo-section">
                <img src={Google} alt="logo" />
              </div>
              <div className="company-iterview-details">
                <div className="company-name">
                  <p>Google</p>
                  <p>React Developer</p>
                </div>
                <div className="interviews-details">
                  <span>AI Interview</span>
                  <span>Coding Round</span>
                  <span>Date: 30 May 24</span>
                  <span>Time: 15:30</span>
                </div>
              </div>
            </div>
            <div className="company-view-button">
              <Button
                sx={{
                  height: "46px",
                  width: "118px",
                  color: "#fff",
                  backgroundColor: "#5C27C0",
                  textTransform: "none",
                  fontSize: "20px",
                  fontWeight: "Medium",
                  fontFamily: "Inter",

                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#5C27C0",
                    border: "1px solid #5C27C0",
                  },
                }}
              >
                View
              </Button>
            </div>
          </div>
          <div className="upcoming-interviews-company">
            <div className="company-logo-n-details">
              <div className="company-logo-section">
                <img src={Google} alt="logo" />
              </div>
              <div className="company-iterview-details">
                <div className="company-name">
                  <p>Google</p>
                  <p>React Developer</p>
                </div>
                <div className="interviews-details">
                  <span>AI Interview</span>
                  <span>Coding Round</span>
                  <span>Date: 30 May 24</span>
                  <span>Time: 15:30</span>
                </div>
              </div>
            </div>
            <div className="company-view-button">
              <Button
              disabled
                sx={{
                  height: "46px",
                  width: "118px",
                  color: "#fff",
                  backgroundColor: "#5C27C0",
                  textTransform: "none",
                  fontSize: "20px",
                  fontWeight: "Medium",
                  fontFamily: "Inter",

                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#5C27C0",
                    border: "1px solid #5C27C0",
                  },
                  "&:disabled": {
                    color: "fff",
                    opacity: "0.9",
                  },
                }}
              >
                View
              </Button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default UpcomingInterviews;
