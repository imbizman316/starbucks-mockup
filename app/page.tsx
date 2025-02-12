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

      <Box
        sx={{
          boxShadow: 2,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            paddingY: 3,
            paddingX: 3,
            maxWidth: "646px",
            fontWeight: 700,
            fontSize: "15px",
            color: "#695844",
          }}
        >
          *Valid for new Starbucks Rewards members for 7 days from sign up.
          Coupon will be available in the offers tab of your Starbucks app
          following sign up and may take up to 48 hours to arrive. Good at
          participating U.S. stores for a handcrafted menu-sized beverage with
          qualifying purchase ($8 max value). Qualifying purchase excludes
          alcohol, Starbucks Card and Card reloads. Limit one. Cannot be
          combined with other offers or discounts. Excludes delivery services.
          Sign up before 3/30/2025.
        </Typography>
      </Box>
    </Box>
  );
}
