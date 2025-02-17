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
        gap: 3,
        maxWidth: { xs: 450, sm: 450, md: 350, lg: 350, xl: 350 },
      }}
    >
      <Link
        href={`/menu/${id}`}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 13,
        }}
      >
        <Box
          sx={{
            width: { xs: 80, sm: 80, md: 100, lg: 100, xl: 100 },
            height: { xs: 80, sm: 80, md: 100, lg: 100, xl: 100 },
            minWidth: { xs: 80, sm: 80, md: 100, lg: 100, xl: 100 },
            overflow: "hidden",
            borderRadius: "100%",
          }}
        >
          <Image
            src={`/images/menu/product/${image}`}
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
