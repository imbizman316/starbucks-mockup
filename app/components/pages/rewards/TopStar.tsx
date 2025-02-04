import { Box, Button, Typography } from "@mui/material";
import React from "react";

function TopStar() {
  return (
    <Box
      sx={{
        backgroundColor: "#d4e9e2",
        height: "650px",
        display: "flex",
      }}
    >
      <Box
        sx={{
          flex: 1,
          alignItems: "start",
          width: "100%",
          height: "100%",
          paddingLeft: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <Typography
          sx={{ fontSize: "1.6rem", width: "12rem", fontWeight: 600 }}
        >
          FREE COFFEE IS A TAP AWAY
        </Typography>
        <Typography>Join now to start earning Rewards</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 2,
          }}
        >
          <Button
            sx={{
              backgroundColor: "#006241",
              borderRadius: 12,
              fontSize: 10,
              color: "#ffffff",
              paddingX: 1.5,
              fontWeight: "bold",
            }}
          >
            Join now
          </Button>
          <Typography>
            Or{" "}
            <span className=" hover:no-underline underline underline-offset-2">
              join in the app
            </span>{" "}
            for the best experience
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          backgroundImage: "url(/images/shapes/Star.webp)",
          backgroundPosition: "-500px -80px",
          backgroundSize: "1500px 630px",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
    </Box>
  );
}

export default TopStar;
