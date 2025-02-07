import { Box } from "@mui/material";
import React from "react";

const LeftSideMenus = () => {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
        },
      }}
    >
      LeftSideMenus
    </Box>
  );
};

export default LeftSideMenus;
