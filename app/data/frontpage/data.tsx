import { boxCard } from "@/app/types/frontpage/type";
import { Box, Button, Typography } from "@mui/material";

type color = "#f4f3ef" | "#016243";
type fontColor = "#453c1f" | "#f6f9e8" | "";

const getFontColor = (color: color): fontColor => {
  let fontColor: fontColor = "";

  switch (color) {
    case "#016243":
      fontColor = "#f6f9e8";
      break;
    case "#f4f3ef":
      fontColor = "#453c1f";
      break;
    default:
      fontColor = "#453c1f";
      break;
  }

  return fontColor;
};

export const frontPageData: boxCard[] = [
  {
    id: 0,
    image: "/images/front-page/137-96866.webp",
    description: (
      <Box
        sx={{
          flex: 1,
          color: getFontColor("#f4f3ef"),
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          display: "flex",
          // paddingX: 20,
          gap: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "50px",
            fontWeight: 600,
          }}
        >
          Crafted with love
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 400,
          }}
        >
          Embrace the season with a Chocolate Hazelnut Cookie Cold Brew and
          Chocolate-Covered Strawberry Crème Frappuccino® blended beverage.
        </Typography>
        <Button
          className="buttonPadding"
          sx={{
            color: "#ffffed",
            fontSize: "16px",
            borderColor: "#ffffed",
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: "50px",
            fontWeight: 600,
          }}
        >
          Learn more
        </Button>
      </Box>
    ),
    color: "#f4f3ef",
  },
  {
    id: 1,
    image: "/images/front-page/top.jpg",
    description: (
      <Box
        sx={{
          flex: 1,
          color: getFontColor("#016243"),
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          display: "flex",
          // paddingX: 20,
          gap: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "50px",
            fontWeight: 600,
          }}
        >
          More reasons to stay awhile
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 400,
          }}
        >
          Mugs, glasses and the condiment bar are back-and all for-here orders
          include freshly brewed refills on coffee and tea.
        </Typography>
        <Button
          className="buttonPadding"
          sx={{
            color: "#ffffed",
            fontSize: "16px",
            borderColor: "#ffffed",
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: "50px",
            fontWeight: 600,
          }}
        >
          Learn more
        </Button>
      </Box>
    ),
    color: "#016243",
  },
  {
    id: 2,
    image: "/images/front-page/137-96930.jpg",
    description: (
      <Box
        sx={{
          flex: 1,
          color: getFontColor("#016243"),
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          display: "flex",
          // paddingX: 20,
          gap: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "50px",
            fontWeight: 600,
          }}
        >
          A big Sunday calls for Starbucks Monday
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 400,
          }}
        >
          On Monday 2.10.25, we{`’`}re treating Starbucks® Rewards members to a
          free tall hot or iced coffee.* Going big for the big game? We{`’`}ve
          got your back.
        </Typography>
        <Button
          className="buttonPadding"
          sx={{
            color: "#ffffed",
            fontSize: "16px",
            borderColor: "#ffffed",
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: "50px",
            fontWeight: 600,
          }}
        >
          Join Now
        </Button>
      </Box>
    ),
    color: "#016243",
  },
];
