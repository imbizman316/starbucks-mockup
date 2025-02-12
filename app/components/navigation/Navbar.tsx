"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import Link from "next/link";
import { menus } from "@/app/data/navbar/data";
import MenuIcon from "@mui/icons-material/Menu";

const MenuItem = ({ link, children }: { link: string; children: string }) => {
  return (
    <Link href={link}>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        {children}
      </Typography>
    </Link>
  );
};

function Navbar() {
  const [openHamburger, setOpenHamburger] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 899) setOpenHamburger(false);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        // paddingX: "2rem",
        paddingY: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // borderBottom: "1px gray solid",
        boxShadow: 6,
        position: "relative",
        // overflow: "hidden",
        zIndex: 10000,
      }}
    >
      <Container
        sx={{
          // paddingX: "2rem",
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
          <Link
            href="/account/login"
            className="buttonPadding"
            style={{
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
          </Link>
          <Link
            href="/account/create"
            className="buttonPadding"
            style={{
              backgroundColor: "#000000b3",
              borderRadius: 12,
              fontSize: 10,
              color: "#ffffff",
              fontWeight: "bold",
            }}
          >
            Join now
          </Link>
        </Box>
      </Container>
      <MenuIcon
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
          fontSize: "40px",
          cursor: "pointer",
        }}
        onClick={() => setOpenHamburger(!openHamburger)}
      />
      {openHamburger && (
        <Box
          sx={{
            height: "100vh",
            position: "absolute",
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            width: "100vw",
            top: "115px",
            right: 0,
            // overflow: "hidden",
          }}
          onClick={() => setOpenHamburger(false)}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                height: "100vh",
                width: "60vw",
                position: "absolute",
                zIndex: 400,
                right: 0,
              }}
            >
              <Container
                sx={{
                  // paddingX: "2rem",
                  paddingY: "1rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link href={"/"}></Link>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    paddingLeft: "2rem",
                    flexDirection: "column",
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
                  display: "flex",
                  // alignItems: "flex-start",
                  gap: 2,
                  paddingLeft: 6,
                  // justifyContent: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Link
                    href="/account/login"
                    className="buttonPadding"
                    style={{
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
                  </Link>
                  <Link
                    href="/account/create"
                    className="buttonPadding"
                    style={{
                      backgroundColor: "#000000b3",
                      borderRadius: 12,
                      fontSize: 10,
                      color: "#ffffff",
                      fontWeight: "bold",
                    }}
                  >
                    Join now
                  </Link>
                </Box>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <RoomIcon />
                  <Link href={"/store-locator"}>
                    <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
                      Find a store
                    </Typography>
                  </Link>
                </Box>
              </Container>
            </Box>
            <Box
              sx={{
                position: "absolute",
                height: "100vh",
                width: "100vw",
                backgroundColor: "black",
                opacity: "30%",
                // left: "-100px",
              }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Navbar;
