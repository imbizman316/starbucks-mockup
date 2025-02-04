import Image from "next/image";
import React from "react";
import Box from "@mui/material/Box";
import { Button, Container, Typography } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import Link from "next/link";

const menus = [
  { id: 1, title: "MENU", link: "/menu" },
  { id: 2, title: "REWARDS", link: "/rewards" },
  { id: 3, title: "GIFT CARDS", link: "/gift" },
];

const MenuItem = ({ link, children }: { link: string; children: string }) => {
  return (
    <Link href={link}>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: 15,
        }}
      >
        {children}
      </Typography>
    </Link>
  );
};

function Navbar() {
  return (
    <Box
      sx={{
        width: "100%",
        paddingX: "2rem",
        paddingY: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Container
        sx={{
          paddingX: "2rem",
          paddingY: "1rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link href={"/"}>
          <Image
            src={"/images/logos/Starbucks_Corporation_Logo_2011.svg.png"}
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <Box sx={{ display: "flex", gap: 2, paddingLeft: "2rem" }}>
          {menus.map((menu, index) => (
            <MenuItem link={menu.link} key={index}>
              {menu.title}
            </MenuItem>
          ))}
        </Box>
      </Container>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          justifyContent: "end",
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <RoomIcon />
          <Link href={"/store-locator"}>
            <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
              Find a store
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: 12,
              fontSize: 10,
              color: "#000000b3",
              paddingX: 2,
              fontWeight: "bold",
              borderColor: "#000000b3",
              borderBlockStyle: "solid",
              borderWidth: "0.1rem",
            }}
          >
            Sign in
          </Button>
          <Button
            sx={{
              backgroundColor: "#000000b3",
              borderRadius: 12,
              fontSize: 10,
              color: "#ffffff",
              paddingX: 1.5,
              fontWeight: "bold",
            }}
          >
            Join now
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
