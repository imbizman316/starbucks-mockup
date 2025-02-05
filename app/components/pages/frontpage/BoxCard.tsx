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
        gridTemplateColumns: "1fr 1fr",
        backgroundColor: color,
        minHeight: "600px",
      }}
    >
      {position === "middle" && description}
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
            backgroundSize: "cover",
          }}
        />
      </Box>
      {position === "top" || position === "bottom" ? description : null}
      {/* <Box sx={{ border: "1px solid red" }}>Right</Box> */}
    </Box>
  );
}

export default BoxCard;
