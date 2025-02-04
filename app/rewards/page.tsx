import { Box, Typography } from "@mui/material";
import React from "react";
import TopStar from "../components/pages/rewards/TopStar";
import GettingStarted from "../components/pages/rewards/GettingStarted";

function Rewards() {
  return (
    <Box>
      <Box sx={{ bgcolor: "#1c3a32", paddingY: 2, boxShadow: 4 }}>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 5,
          }}
        >
          STARBUCKS REWARDS
        </Typography>
      </Box>
      <TopStar />
      <GettingStarted />
    </Box>
  );
}

export default Rewards;
