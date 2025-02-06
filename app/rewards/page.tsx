import { Box, Typography } from "@mui/material";
import React from "react";
import TopStar from "../components/pages/rewards/TopStar";
import GettingStarted from "../components/pages/rewards/GettingStarted";
import StickyTitle from "../components/navigation/StickyTitle";
import GetFavorites from "../components/pages/rewards/GetFavorites";

const Questions = () => {
  return (
    <Box
      sx={{
        paddingY: "64px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "494px",
        }}
      >
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: 600,
            color: "#2f2325",
          }}
        >
          Questions?
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#2f2325",
          }}
        >
          We want to help in any way we can. You can ask your barista anytime or
          we’ve answered the most commonly asked terms right over here .
        </Typography>
      </Box>
    </Box>
  );
};

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
      <Questions />
    </Box>
  );
}

export default Rewards;
