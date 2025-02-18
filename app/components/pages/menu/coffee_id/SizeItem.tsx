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
}: {
  size: Props;
  currentSize: Sizes | string;
  setCurrentSize: Dispatch<SetStateAction<Sizes | string>>;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        src={`/images/menu/sizes/${
          currentSize === size.size ? `${size.size}_active` : size.size
        }.svg`}
        alt="size-grande"
        width={50}
        height={50}
        onClick={() => setCurrentSize(size.size)}
        style={{
          cursor: "pointer",
        }}
      />
      <Typography>{size.size}</Typography>
      <Typography>{size.quantity} fl oz</Typography>
    </Box>
  );
}

export default SizeItem;
