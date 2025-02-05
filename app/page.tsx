import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Button } from "@mui/material";

function FrontTop() {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#016243",
      }}
    >
      <Image
        src="/images/front-page/top.jpg"
        alt="happy man"
        width={666}
        height={578}
        style={{
          flex: 1,
        }}
      />
      <Box
        sx={{
          flex: 1,
          color: "#ffffed",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          display: "flex",
          paddingX: 20,
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
    </Box>
  );
}

export default function Home() {
  return (
    <Box>
      <FrontTop />
    </Box>
  );
}
