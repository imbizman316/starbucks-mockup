import React from "react";
import { aboutUsData } from "@/app/data/footer/data";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const AboutUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        padding: "10px 0 25px 0",
      }}
    >
      {aboutUsData.map((data, index) => (
        <Box
          sx={{
            width: "188px",
          }}
          key={index}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 560,
              letterSpacing: 1,
              color: "#695844",
              marginBottom: 3,
            }}
          >
            {data.mainTitle}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            {data.subMenus.map((submenu, index) => (
              <Box key={index}>
                <Typography
                  sx={{
                    color: "rgba(0,0,0,.58)",
                    fontSize: "13px",
                    // "&:hover": {
                    //   color: "#695844",
                    //   fontWeight: 550,
                    // },
                    transition: "text-shadow 0.1s ease",
                    "&:hover": {
                      textShadow: "0 0 1px currentColor",
                    },
                  }}
                >
                  <Link href={submenu.link}>{submenu.title}</Link>
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AboutUs;
