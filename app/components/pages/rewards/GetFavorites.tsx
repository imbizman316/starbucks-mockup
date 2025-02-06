"use client";

import { favorites } from "@/app/data/pages/rewards/data";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

// const Fist = (
//   <Box
//     sx={{
//       position: "relative",
//     }}
//     onClick={handleMovement}
//   >
//     <Typography
//       sx={{
//         minWidth: optionWidth,
//         textAlign: "center",
//       }}
//     >
//       25
//     </Typography>
//     <hr
//       style={{
//         transform: `translate(${optionWidth * barMovement}px)`,
//         transitionDuration: "0.5s",
//       }}
//       className="border-b-4 border-black border-solid w-[100%] text-lg absolute"
//     />
//   </Box>
// );

// const Second = (
//   <Typography
//     sx={{
//       minWidth: optionWidth,
//       textAlign: "center",
//     }}
//   >
//     400
//   </Typography>
// );

const FavoriteItem = () => {
  const optionWidth = 100;

  const [barMovement, setBarMovement] = useState(0);

  const handleMovement = (index: number) => {
    setBarMovement(index);
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {favorites.map((favorite, index) =>
        index === 0 ? (
          <Box
            key={index}
            sx={{
              position: "relative",
            }}
            onClick={() => handleMovement(index)}
          >
            <Typography
              sx={{
                minWidth: optionWidth,
                textAlign: "center",
              }}
            >
              {favorite.header}
            </Typography>
            <hr
              style={{
                transform: `translate(${optionWidth * barMovement}px)`,
                transitionDuration: "0.5s",
              }}
              className="border-b-4 border-black border-solid w-[100%] text-lg absolute"
            />
          </Box>
        ) : (
          <Typography
            onClick={() => handleMovement(index)}
            key={index}
            sx={{
              minWidth: optionWidth,
              textAlign: "center",
            }}
          >
            {favorite.header}
          </Typography>
        )
      )}
    </Box>
  );
};

const GetFavorites = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          minWidth: "517px",
        }}
      >
        <Typography>Get your favorites for free</Typography>
        <FavoriteItem />
      </Box>
    </Box>
  );
};

export default GetFavorites;
