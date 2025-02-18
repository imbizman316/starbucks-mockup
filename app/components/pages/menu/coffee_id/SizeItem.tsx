import { Box, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { Sizes } from "@/app/data/pages/menu/data";

interface Props {
  size: string;
  quantity: number;
}

function SizeItem({
  size,
  currentSize,
  setCurrentSize,
  sharedSize,
}: {
  size: Props;
  currentSize: Sizes | string;
  setCurrentSize: Dispatch<SetStateAction<string>>;
  index: number;
  sharedSize: number;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          width: sharedSize,
          height: sharedSize,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={`/images/menu/sizes/${
            currentSize === size.size ? `${size.size}_active` : size.size
          }.svg`}
          alt="size-grande"
          width={40}
          height={40}
          onClick={() => {
            setCurrentSize(size.size);
          }}
          style={{
            cursor: "pointer",
          }}
        />
      </Box>
      <Typography
        sx={{
          color: "#3d3c5c",
        }}
        className="font-semibold text-lg"
      >
        {size.size}
      </Typography>
      <Typography
        sx={{
          color: "#3d3c5c",
          fontSize: "14px",
        }}
      >
        {size.quantity} fl oz
      </Typography>
    </Box>
  );
}

export default SizeItem;
