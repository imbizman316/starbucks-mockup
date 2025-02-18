import Box from "@mui/material/Box";
import React from "react";
import SocialHandleBar from "./SocialHandleBar";
import PrivacyTerms from "./PrivacyTerms";
import Typography from "@mui/material/Typography";
import AboutUs from "./AboutUs";

function Footer() {
  return (
    <Box sx={{ paddingX: 7, paddingY: 5 }}>
      <AboutUs />
      <hr className="border-gray-300 border-solid w-[100%]" />
      <SocialHandleBar />
      <PrivacyTerms />
      <Typography sx={{ paddingTop: 3, fontSize: "14px", color: "#756c6d" }}>
        &copy; 2025 Starbucks Coffee Company. All right reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
