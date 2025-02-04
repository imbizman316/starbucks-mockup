import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";

function FrontTop() {
  return (
    <Box
      sx={{
        display: "flex",
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
        }}
      >
        <Typography>More reasons to stay awhile</Typography>
        <Typography>
          Mugs, glasses and the condiment bar are back-and all for-here orders
          include freshly brewed refills on coffee and tea.
        </Typography>
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
