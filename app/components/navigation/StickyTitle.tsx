import { Box } from "@mui/material";
import React, { ReactNode } from "react";

function StickyTitle({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        bgcolor: "#1c3a32",
        paddingY: 2,
        boxShadow: 4,
        position: "sticky",
        top: 0,
        zIndex: 1000,
        paddingLeft: 5,
      }}
    >
      {children}
    </Box>
  );
}

export default StickyTitle;
