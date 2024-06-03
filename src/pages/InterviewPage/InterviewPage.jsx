import "./InterviewPage.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import UpcomingInterviews from "./UpcomingInterviews";
import RecentInterviews from "./RecentInterviews";

function InterviewPage() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <TabContext value={value}>
        <Box sx={{ width: "100%" }}>
          <TabList
            className="abcd"
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              "& .MuiTab-root": {
                width: "50%",
                color: "#ABABAB",
                fontSize: "22px",
                fontWeight: "bold",
                fontFamily: "Manrope",
              },
              "& .MuiTab-textColorInherit": {
                color: "#5C27C0",
              },
              "& .Mui-selected": {
                color: "#5C27C0",
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "#5C27C0",
                height: "1px",
              },
            }}
          >
            <Tab label="Upcoming Interviews" value="1" />
            <Tab label="Recents Interviews" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <UpcomingInterviews />
        </TabPanel>
        <TabPanel value="2">
          <RecentInterviews />
        </TabPanel>
      </TabContext>
    </>
  );
}

export default InterviewPage;
