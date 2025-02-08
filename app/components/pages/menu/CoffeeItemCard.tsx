import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const CoffeeItemCard = ({
  image,
  name,
  id,
}: {
  image: string;
  name: string;
  id: string;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Link href={`/menu/${id}`}>
        <Box
          sx={{
            width: 80,
            height: 80,
            overflow: "hidden",
            borderRadius: "100%",
          }}
        >
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="scale-[180%] translate-y-4"
          />
        </Box>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "16px",
            color: "##2f2325",
            textTransform: "capitalize",
          }}
        >
          {name}
        </Typography>
      </Link>
    </Box>
  );
};
