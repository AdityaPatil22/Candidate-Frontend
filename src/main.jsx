import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CandidateProfilePage from './pages/CandidateProfilePage/CandidateProfilePage.jsx';
import InterviewPage from "./pages/InterviewPage/InterviewPage.jsx"
import CandidateMobile from './pages/CandidateMobile/index.jsx'
import CandidateEnterOtp from './pages/CandidateEnterOtp/index.jsx'
import CandidateInvalidOtp from './pages/CandidateInvalidOtp/index.jsx'
import Root from './Root.jsx';


const theme = createTheme({
  typography: {
    fontFamily: `"Inter", sans-serif`,
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "14px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "14px",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontSize: "14px !important",
        },
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <CandidateProfilePage /> },
      {
        path: "candidate-interview",
        element: <InterviewPage />,
      },
    ],
  },
  {
    path: "candidate-mobile",
    element: <CandidateMobile />
  },
  {
    path: "candidate-enter-otp",
    element: <CandidateEnterOtp />
  },
  {
    path: "candidate-invalid-otp",
    element: <CandidateInvalidOtp />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
       <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
