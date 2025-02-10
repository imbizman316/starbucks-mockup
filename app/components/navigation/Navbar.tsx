import Image from "next/image";
import React from "react";
import Box from "@mui/material/Box";
import { Button, Container, Typography } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import Link from "next/link";
import { menus } from "@/app/data/navbar/data";

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
        // borderBottom: "1px gray solid",
        boxShadow: 1,
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
            className="min-w-[50px]"
          />
        </Link>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
            gap: 2,
            paddingLeft: "2rem",
          }}
        >
          {menus.map((menu, index) => (
            <MenuItem link={menu.link} key={index}>
              {menu.title}
            </MenuItem>
          ))}
        </Box>
      </Container>
      <Container
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
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
            className="buttonPadding"
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: 12,
              fontSize: 10,
              color: "#000000b3",
              fontWeight: "bold",
              borderColor: "#000000b3",
              borderBlockStyle: "solid",
              borderWidth: "0.1rem",
            }}
          >
            Sign in
          </Button>
          <Button
            className="buttonPadding"
            sx={{
              backgroundColor: "#000000b3",
              borderRadius: 12,
              fontSize: 10,
              color: "#ffffff",
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
