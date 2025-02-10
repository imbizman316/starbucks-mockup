import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const ProductTop = ({
  name,
  price,
  image,
}: // category,
{
  name: string;
  price: number;
  image: string | null;
  category: string;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#1e3932",
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
        <Image src={image} alt={name} width={300} height={300} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minWidth: 400,
          textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left,",
          },
          gap: 1,
        }}
      >
        <Box
          sx={{
            color: "#f4ffff",
            fontSize: {
              xs: "26px",
              sm: "36px",
              md: "36px",
              lg: "36px",
              xl: "36px",
            },
            fontWeight: 700,
            textTransform: "capitalize",
          }}
        >
          {name}
        </Box>
        <Box
          sx={{
            fontSize: {
              xs: "20px",
              sm: "24px",
              md: "24px",
              lg: "24px",
              xl: "24px",
            },
            fontWeight: 400,
            color: "#b2bebc",
            paddingBottom: "32px",
          }}
        >
          $ {price}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductTop;
