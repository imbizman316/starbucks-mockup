import { Box, Typography } from "@mui/material";
import React from "react";
import TopStar from "../components/pages/rewards/TopStar";
import GettingStarted from "../components/pages/rewards/GettingStarted";
import StickyTitle from "../components/navigation/StickyTitle";
import GetFavorites from "../components/pages/rewards/GetFavorites";

function Rewards() {
  return (
    <Box>
      <StickyTitle>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          STARBUCKS REAWARDS
        </Typography>
      </StickyTitle>
      <TopStar />
      <GettingStarted />
      <GetFavorites />
    </Box>
  );
}

export default Rewards;
