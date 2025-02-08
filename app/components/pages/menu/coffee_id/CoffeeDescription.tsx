import { Box, Typography } from "@mui/material";
import React from "react";

const CoffeeDescription = ({ description }: { description: string }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#1e3932",
        paddingY: 3,
        paddingX: {
          xs: 3,
          sm: 25,
          md: 40,
          lg: 40,
          xl: 40,
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "420px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "15px",
            color: "#afcac5",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default CoffeeDescription;
