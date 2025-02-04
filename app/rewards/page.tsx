import { Box, Typography } from "@mui/material";
import React from "react";
import TopStar from "../components/pages/rewards/TopStar";
import GettingStarted from "../components/pages/rewards/GettingStarted";
import StickyTitle from "../components/navigation/StickyTitle";

function Rewards() {
  return (
    <Box>
      <StickyTitle>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 5,
          }}
        >
          STARBUCKS REAWARDS
        </Typography>
      </StickyTitle>
      <TopStar />
      <GettingStarted />
    </Box>
  );
}

export default Rewards;
