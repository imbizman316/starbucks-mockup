import { Box } from "@mui/material";
import React, { ReactNode } from "react";

function StickyTitle({
  color,
  children,
}: {
  color?: string | null;
  children: ReactNode;
}) {
  return (
    <Box
      sx={{
        bgcolor: color ? color : "#1c3a32",
        paddingY: 2,
        boxShadow: 4,
        position: "sticky",
        top: 0,
        zIndex: 1000,
        paddingLeft: 16,
      }}
    >
      {children}
    </Box>
  );
}

export default StickyTitle;
