import { menus } from "@/app/data/navbar/data";
import { Box, Container } from "@mui/material";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import CreateAccountLoginBar from "./CreateAccountLoginBar";
import { MenuItemSlide } from "./Navbar";

function RightSlideMenu({
  openHamburger,
  setOpenHamburger,
}: {
  openHamburger: boolean;
  setOpenHamburger: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Box
      sx={{
        height: "100vh",
        position: "absolute",
        // width: openHamburger ? "100%" : "0%",
        right: 0,
        width: "10%",
        transitionDelay: "0.2s",
        transitionDuration: "0.3s",
        top: "115px",
        transform: openHamburger ? "translateX(0)" : "translateX(100%)", // Slide effect
        transition: "transform 0.3s ease-in-out",
      }}
      onClick={() =>
        setTimeout(() => {
          setOpenHamburger(false);
        }, 1000)
      }
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
            // width: "60vw",
            position: "absolute",
            zIndex: 400,
            right: 0,
          }}
        >
          <Container
            sx={{
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
                <MenuItemSlide link={menu.link} key={index}>
                  {menu.title}
                </MenuItemSlide>
              ))}
            </Box>
          </Container>
          <Container
            sx={{
              display: "flex",
              gap: 2,
              paddingLeft: 6,
              flexDirection: "column",
            }}
          >
            <CreateAccountLoginBar />
          </Container>
        </Box>
        <Box
          sx={{
            position: "absolute",
            height: "100vh",
            width: "100%",
            backgroundColor: "black",
            opacity: openHamburger ? "30%" : "0%",
            // display: openHamburger ? "block" : "none",
            transitionDuration: "2s",
          }}
        />
      </Box>
    </Box>
  );
}

export default RightSlideMenu;
