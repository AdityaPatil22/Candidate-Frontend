import "./style.scss";
import Button from "@mui/material/Button";
import { useState } from "react";
import d from "../../assets/images/smalldown.svg"
import CandidateVerificationTick from '../../assets/icons/CandidateVerificationTick'
import OtpInput from "react-otp-input";
import Header from "../../components/CandidateHeader/Header";
import { Link } from "react-router-dom";

export default function CandidateEnterOtp() {

    const [code, setCode] = useState("");
    const handleChange = (code) => setCode(code);

    return (
        <div className="candidate-enter-otp-outer-container">
              <Header/>
            <div className="candidate-enter-otp-inner-container">
                <div className='valid-otp-container'>
                    <CandidateVerificationTick />
                    <p>OTP sent to the registered mobile number</p>
                </div>
                <div className="candidate-enter-otp-content-container">
                    <p className="candidate-text">*Candidate</p>
                    <h1 className="login-text">Login</h1>
                    <h2 className="enter-otp-text">Enter OTP</h2>
                    <div className="otp-input-container">
                    <OtpInput
                        value={code}
                        onChange={handleChange}
                        numInputs={6}
                        separator={<span style={{ width: "8px" }}></span>}
                        isInputNum={true}
                        shouldAutoFocus={true}
                        inputStyle={{
                            border: "1px solid #000000",
                            borderRadius: "8px",
                            width: "62px",
                            height: "64px",
                            fontSize: "48px",
                            color: "#000000",
                            fontWeight: "400",
                            caretColor: "blue",
                            marginRight: "10px",
                            marginBottom: "32px",
                            outline: "none",
                        }}
                        focusStyle={{
                            border: "1px solid #CFD3DB",
                            outline: "none",
                        }}
                        renderInput={(props) => <input {...props} />}
                    />
                    </div>
                    

                    <Link to="/">
                        <Button
                            variant="outlined"
                            sx={{
                                border: "solid 1px #5C27C0",
                                color: "#fff",
                                borderRadius: "4.75px",
                                width: "163px",
                                height: "46px",
                                fontWeight: "400",
                                textTransform: "capitalize",
                                background: "#5C27C0",
                                fontSize: "18px !important",
                                alignSelf: "center",
                                marginBottom: "40px",
                                "&:hover": {
                                    background: "#fff",
                                    color: "#5C27C0",
                                    border: "solid 1px #5C27C0",
                                },
                            }}
                        >
                            Login
                        </Button>
                    </Link>
                    
                    <div className='resend-text-container'>
                        <p className='not-recieved-text'>Not received OTP?</p>
                        <p className='resend-change-mobile-text'>Resend OTP</p>
                    </div>
                    <p className="or-text">OR</p>
                    <p className='resend-change-mobile-text'>Change mobile number</p>
                    
                </div>
            </div>
        </div>
    );
}
