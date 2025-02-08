import { Box } from "@mui/material";
import React from "react";

const FullTwoDividedCard = ({
  left,
  right,
  color,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  color: string;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        },
        paddingY: 2,
      }}
    >
      <Box
        sx={{
          minWidth: 400,
          display: "flex",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
          },
        }}
      >
        {left}
      </Box>
      <Box
        sx={{
          minWidth: 400,
          display: "flex",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
          },
        }}
      >
        {right}
      </Box>
    </Box>
  );
};

export default FullTwoDividedCard;
