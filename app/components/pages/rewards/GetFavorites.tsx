"use client";

import { favorites } from "@/app/data/pages/rewards/data";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";

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
                fontSize: "19px",
                fontWeight: 600,
                color: "#000000",
                paddingY: 2,
              }}
            >
              {favorite.header}
              <StarIcon
                sx={{
                  fontSize: "16px",
                  color: "#CBA258",
                }}
              />
            </Typography>
            <hr
              style={{
                transform: `translate(${optionWidth * barMovement}px)`,
                transitionDuration: "0.5s",
              }}
              className="border-b-4 border-[#0c704c] border-solid w-[100%] text-lg absolute"
            />
          </Box>
        ) : (
          <Typography
            onClick={() => handleMovement(index)}
            key={index}
            sx={{
              minWidth: optionWidth,
              textAlign: "center",
              fontSize: "19px",
              fontWeight: 600,
              color: "#000000",
              paddingY: 2,
            }}
          >
            {favorite.header}
            <StarIcon
              sx={{
                fontSize: "16px",
                color: "#CBA258",
              }}
            />
          </Typography>
        )
      )}
    </Box>
  );
};

const FavoriteContentCard = () => {
  return (
    <Box
      sx={{
        paddingY: "32px",
        backgroundColor: "#d4e9e2",
        width: "100%",
      }}
    >
      Content Card
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
        backgroundColor: "#f2f8f6",
        paddingTop: "48px",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          minWidth: "517px",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 600,
            textAlign: "center",
            paddingBottom: "16px",
          }}
        >
          Get your favorites for free
        </Typography>
        <FavoriteItem />
      </Box>
      <FavoriteContentCard></FavoriteContentCard>
    </Box>
  );
};

export default GetFavorites;
