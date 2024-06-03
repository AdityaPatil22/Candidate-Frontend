import React from "react";
import "./RecentsInterviews.scss";
import { Button } from "@mui/material";
import Google from "../../assets/images/Google G.png";

const interviewData = [
  { logo: Google, company: "Google", role: "React Developer", mode:"AI Interview", round:"Coding Round", date: "30 May 24", time: "15:30", selected: true },
  { logo: Google, company: "Google", role: "React Developer", mode:"AI Interview", round:"Coding Round", date: "30 May 24", time: "15:30", selected: false },
  { logo: Google, company: "Google", role: "React Developer", mode:"AI Interview", round:"Coding Round", date: "30 May 24", time: "15:30", selected: true },
];

function RecentInterviews() {
  return (
    <div className="recent-interviews-sections">
      {interviewData.map((interview, index) => (
        <div key={index} className="recent-interviews-company">
          <div className="company-logo-n-details">
            <div className="company-logo-section">
            <img src={interview.logo} alt="logo" />
            </div>
            <div className="company-iterview-details">
              <div className="company-name">
                <p>{interview.company}</p>
                <p>{interview.role}</p>
              </div>
              <div className="recent-selected-n-details">
                {interview.selected && (
                  <p>*You are selected for the next round.</p>
                )}
                <div className="interviews-details">
                  <span>{interview.mode}</span>
                  <span>{interview.round}</span>
                  <span>Done on: {interview.date}, {interview.time}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="company-view-button">
            <Button
              sx={{
                color: "#5C27C0",
                border: "3px solid #5C27C0",
                borderRadius: "50px",
                textTransform: "none",
                fontSize: "20px",
                fontWeight: "Medium",
                fontFamily: "Inter",
                padding: "10px 20px",

                "&:hover": {
                  backgroundColor: "#5C27C0",
                  color: "#fff",
                },
              }}
            >
              Interview Completed
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentInterviews;
