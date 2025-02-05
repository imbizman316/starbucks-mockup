import Box from "@mui/material/Box";
import BoxCard from "./components/pages/frontpage/BoxCard";
import { frontPageData } from "./data/frontpage/data";
import { boxCard } from "./types/frontpage/type";
import { Typography } from "@mui/material";

export default function Home() {
  const latestData: boxCard[] = [
    {
      ...frontPageData[frontPageData.length - 1],
      position: "top",
    },
    {
      ...frontPageData[frontPageData.length - 2],
      position: "middle",
    },
    {
      ...frontPageData[frontPageData.length - 3],
      position: "bottom",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4.5,
          maxWidth: "1440px",
          paddingY: 5,
        }}
      >
        {latestData.map((data, index) => (
          <BoxCard
            key={index}
            position={data.position}
            image={data.image}
            description={data.description}
            color={data.color}
          />
        ))}
      </Box>

      <Typography
        sx={{
          paddingY: 3,
          maxWidth: "646px",
          fontWeight: 400,
          fontSize: "14px",
          color: "#000304",
        }}
      >
        *Offer valid at participating stores for Starbucks® Rewards members only
        for a free tall hot or iced brewed coffee. Excludes nitro cold brew,
        cold brew, and Starbucks Reserve coffee. Excludes delivery services.
        Limit 1 per member. Customizations may cost extra.
      </Typography>
    </Box>
  );
}
