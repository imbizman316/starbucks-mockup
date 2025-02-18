"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import Link from "next/link";
import { menus } from "@/app/data/navbar/data";
// import MenuIcon from "@mui/icons-material/Menu";
import CreateAccountLoginBar from "./CreateAccountLoginBar";
import RightSlideMenu from "./RightSlideMenu";
import AnimatedHamburger from "../michelaneous/AnimatedHamburger";

export const MenuItemSlide = ({
  link,
  children,
}: {
  link: string;
  children: string;
}) => {
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

  useEffect(() => {
    if (openHamburger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openHamburger]);

  return (
    <Box
      sx={{
        width: "100%",
        paddingY: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: 0,
        position: "relative",
        zIndex: 10000,
        overflow: openHamburger ? "block" : "hidden",
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
            <MenuItemSlide link={menu.link} key={index}>
              {menu.title}
            </MenuItemSlide>
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
        <CreateAccountLoginBar />
      </Container>
      <AnimatedHamburger
        customState={openHamburger}
        customSetState={setOpenHamburger}
      />
      {/* <MenuIcon
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
          marginRight: "16px",
        }}
        onClick={() => setOpenHamburger(!openHamburger)}
      /> */}
      {
        // <Box
        //   sx={{
        //     height: "100vh",
        //     position: "absolute",
        //     // width: openHamburger ? "100%" : "0%",
        //     right: 0,
        //     width: "10%",
        //     transitionDelay: "0.2s",
        //     transitionDuration: "0.3s",
        //     top: "115px",
        //     transform: openHamburger ? "translateX(0)" : "translateX(100%)", // Slide effect
        //     transition: "transform 0.3s ease-in-out",
        //   }}
        //   onClick={() =>
        //     setTimeout(() => {
        //       setOpenHamburger(false);
        //     }, 1000)
        //   }
        // >
        //   <Box
        //     sx={{
        //       position: "relative",
        //     }}
        //   >
        //     <Box
        //       sx={{
        //         backgroundColor: "white",
        //         height: "100vh",
        //         // width: "60vw",
        //         position: "absolute",
        //         zIndex: 400,
        //         right: 0,
        //       }}
        //     >
        //       <Container
        //         sx={{
        //           paddingY: "1rem",
        //           display: "flex",
        //           alignItems: "center",
        //         }}
        //       >
        //         <Link href={"/"}></Link>
        //         <Box
        //           sx={{
        //             display: "flex",
        //             gap: 2,
        //             paddingLeft: "2rem",
        //             flexDirection: "column",
        //           }}
        //         >
        //           {menus.map((menu, index) => (
        //             <MenuItem link={menu.link} key={index}>
        //               {menu.title}
        //             </MenuItem>
        //           ))}
        //         </Box>
        //       </Container>
        //       <Container
        //         sx={{
        //           display: "flex",
        //           gap: 2,
        //           paddingLeft: 6,
        //           flexDirection: "column",
        //         }}
        //       >
        //         <CreateAccountLoginBar />
        //       </Container>
        //     </Box>
        //     <Box
        //       sx={{
        //         position: "absolute",
        //         height: "100vh",
        //         width: "100%",
        //         backgroundColor: "black",
        //         opacity: openHamburger ? "30%" : "0%",
        //         // display: openHamburger ? "block" : "none",
        //         transitionDuration: "2s",
        //       }}
        //     />
        //   </Box>
        // </Box>
        <RightSlideMenu
          openHamburger={openHamburger}
          setOpenHamburger={setOpenHamburger}
        />
      }
    </Box>
  );
}

export default Navbar;
