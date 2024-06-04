import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { parse, isBefore } from 'date-fns';
import { Link } from "react-router-dom";
import Google from "../../assets/images/Google G.png";

import "./UpcomingInterviews.scss";

function UpcomingInterviews() {
  const interviewData = [
    { logo: Google, company: "Google", role: "React Developer", mode:"AI Interview", round:"Coding Round", date: "30 May 24", time: "15:30"},
    { logo: Google, company: "Google", role: "React Developer", mode:"AI Interview", round:"Coding Round", date: "30 May 24", time: "15:30"},
    { logo: Google, company: "Google", role: "React Developer", mode:"AI Interview", round:"Coding Round", date: "30 May 24", time: "15:30"},
  ];

  const [buttonStates, setButtonStates] = useState(interviewData.map(() => true));

  useEffect(() => {
    const updatedButtonStates = interviewData.map(({ date, time }) => {
      const interviewDateTimeString = `${date} ${time}`;
      const interviewDateTime = parse(interviewDateTimeString, 'dd MMM yy HH:mm', new Date());
      const currentDateTime = new Date();
      return isBefore(currentDateTime, interviewDateTime);
    });

    setButtonStates(updatedButtonStates);
  }, [interviewData]);

  return (
    <>
      <div className="upcoming_interviews_main">
        <p>
          *Please note that you will only be able to go to the assessment page
          in the given time slot.
        </p>
        <div className="upcoming-interviews-sections">
          {interviewData.map((interview, index) => (
            <div key={index} className="upcoming-interviews-company">
              <div className="company-logo-n-details">
                <div className="company-logo-section">
                <img src={interview.logo} alt="logo" />
                </div>
                <div className="company-iterview-details">
                  <div className="company-name">
                    <p>{interview.company}</p>
                    <p>{interview.role}</p>
                  </div>
                  <div className="interviews-details">
                    <span>AI Interview</span>
                    <span>Coding Round</span>
                    <span>Date: {interview.date}</span>
                    <span>Time: {interview.time}</span>
                  </div>
                </div>
              </div>
              <div className="company-view-button">
                <Link to="/interview-details">
                  <Button
                    disabled={buttonStates[index]}
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
                        color: "#fff",
                        opacity: "0.7",
                      },
                    }}
                  >
                    View
                  </Button>
                </Link>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UpcomingInterviews;
