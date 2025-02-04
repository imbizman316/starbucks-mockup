import Box from "@mui/material/Box";
import React from "react";
import SocialHandleBar from "./SocialHandleBar";
import PrivacyTerms from "./PrivacyTerms";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box sx={{ paddingX: 5 }}>
      <SocialHandleBar />
      <PrivacyTerms />
      <Typography sx={{ paddingTop: 3 }}>
        &copy; 2025 Starbucks Coffee Company. All right reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
