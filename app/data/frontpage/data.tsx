import { boxCard } from "@/app/types/frontpage/type";
import { Box, Button, Typography } from "@mui/material";

type color = string;
type fontColor = "#453c1f" | "#f6f9e8" | "";
enum Colors {
  white = "#f4f3ef",
  green = "#016243",
}

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

const CardTextPart = ({
  title,
  content,
  button,
  color,
}: {
  title: string;
  content: string;
  button: string;
  color: string;
}) => {
  return (
    <Box
      sx={{
        flex: 1,
        color: getFontColor(color),
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        display: "flex",
        gap: 3,
        maxWidth: "666px",
        paddingX: 5,
        paddingY: 3,
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "19px",
          fontWeight: 400,
        }}
      >
        {content}
      </Typography>
      <Button
        className="buttonPadding"
        sx={{
          color: getFontColor(color),
          fontSize: "14px",
          borderColor: getFontColor(color),
          borderWidth: 1,
          borderStyle: "solid",
          borderRadius: "50px",
          fontWeight: 600,
        }}
      >
        {button}
      </Button>
    </Box>
  );
};

export const frontPageData: boxCard[] = [
  {
    id: 0,
    image: "/images/front-page/137-96866.webp",
    description: (
      <CardTextPart
        title="Crafted with love"
        content="Embrace the season with a Chocolate Hazelnut Cookie Cold Brew and Chocolate-Covered Strawberry Crème Frappuccino® blended beverage."
        button="learn more"
        color={Colors.white}
      />
    ),
    color: "#f4f3ef",
  },
  {
    id: 1,
    image: "/images/front-page/top.jpg",
    description: (
      <CardTextPart
        title="More reasons to stay awhile"
        content="Mugs, glasses and the condiment bar are back-and all for-here orders include freshly brewed refills on coffee and tea."
        button="learn more"
        color={Colors.green}
      />
    ),
    color: "#016243",
  },
  {
    id: 2,
    image: "/images/front-page/137-96930.jpg",
    description: (
      <CardTextPart
        title="A big Sunday calls for Starbucks Monday"
        content="On Monday 2.10.25, we’re treating Starbucks® Rewards members to a free tall hot or iced coffee.* Going big for the big game? We’ve got your back."
        button="join now"
        color={Colors.green}
      />
    ),
    color: "#016243",
  },
];
