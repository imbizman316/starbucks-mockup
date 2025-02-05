import Box from "@mui/material/Box";
import BoxCard from "./components/pages/frontpage/BoxCard";
import { frontPageData } from "./data/frontpage/data";
import { boxCard } from "./types/frontpage/type";

export default function Home() {
  const latestData: boxCard[] = [
    { ...frontPageData[frontPageData.length - 1], position: "top" },
    { ...frontPageData[frontPageData.length - 2], position: "middle" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingY: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4.5,
          maxWidth: "1440px",
        }}
      >
        {latestData.map((data, index) => (
          <BoxCard
            key={index}
            position={data.position}
            image={data.image}
            description={data.description}
          />
        ))}
      </Box>
    </Box>
  );
}
