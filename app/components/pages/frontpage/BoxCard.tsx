import { boxCard } from "@/app/types/frontpage/type";
import { Box } from "@mui/material";
// import Image from "next/image";
import React from "react";

function BoxCard({ image, description, position, color }: boxCard) {
  return (
    <Box
      sx={{
        display: "grid",
        width: "100%",
        gridTemplateColumns: {
          xs: "none",
          sm: "1fr 1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr",
          xl: "1fr 1fr",
        },
        gridTemplateRows: {
          xs: "1fr 1fr",
          sm: "none",
          md: "none",
          lg: "none",
          xl: "none",
        },
        backgroundColor: color,
        height: {
          xl: "500px",
          lg: "500px",
          md: "auto",
          sm: "auto",
          xs: "auto",
        },
        flexDirection: "column",
      }}
    >
      {position === "middle" && (
        <Box
          sx={{
            display: "flex",
            alignitems: "center",
            justifyContent: "center",
          }}
        >
          {description}
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            // backgroundSize: "cover",
            backgroundSize: {
              xs: "contain",
              sm: "contain",
              md: "contain",
              lg: "cover",
              xl: "cover",
            },
            backgroundRepeat: "no-repeat",
          }}
        />
      </Box>
      {(position === "top" && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {description}
        </Box>
      )) ||
        (position === "bottom" && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {description}
          </Box>
        ))}
      {/* <Box sx={{ border: "1px solid red" }}>Right</Box> */}
    </Box>
  );
}

export default BoxCard;
