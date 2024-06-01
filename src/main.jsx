import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
       <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
