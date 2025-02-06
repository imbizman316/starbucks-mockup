"use client";

import { favorites } from "@/app/data/pages/rewards/data";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { favoriteContent } from "@/app/types/rewards/types";
import Image from "next/image";

const FavoriteItem = ({
  handleMovement,
  contentIndex,
}: {
  contentIndex: number;
  handleMovement: (index: number) => void;
}) => {
  const optionWidth = 100;

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
                transform: `translate(${optionWidth * contentIndex}px)`,
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
              color: "#152837",
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

const FavoriteContentCard = ({
  content,
  opasityDelay,
}: {
  content: favoriteContent;
  opasityDelay: boolean;
}) => {
  return (
    <Box
      sx={{
        paddingY: "46px",
        backgroundColor: "#d4e9e2",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          opacity: opasityDelay ? 0 : 1,
          transitionDuration: "0.2s",
          display: "grid",
          width: "700px",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <Image
          src={content.image}
          alt={content.title}
          width={350}
          height={350}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#152837",
              fontSize: "24px",
              fontWeight: 600,
              paddingBottom: "16px",
              letterSpacing: "0.2px",
            }}
          >
            {content.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              letterSpacing: "0.2px",
            }}
          >
            {content.sentence}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const GetFavorites = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const [opasityDelay, setOpasityDelay] = useState(false);

  const handleMovement = (index: number) => {
    setOpasityDelay(true);

    setTimeout(() => {
      setContentIndex(index);
      setOpasityDelay(false);
    }, 200);
  };

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
        <FavoriteItem
          handleMovement={handleMovement}
          contentIndex={contentIndex}
        />
      </Box>
      <FavoriteContentCard
        content={favorites[contentIndex]}
        opasityDelay={opasityDelay}
      />
    </Box>
  );
};

export default GetFavorites;
