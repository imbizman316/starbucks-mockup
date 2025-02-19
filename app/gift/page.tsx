"use client";

import { Box, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import "../../app/globals.css";
// import { useState } from "react";

// import React, { useState } from "react";

const ScreenSizes = {
  normalWholeWidth: "384px",
  normalImageWidth: 336,
  smallWholeWidth: "327px",
  smallImageWidth: 279,
  normalimageHeight: 200,
  smallImageHeight: 200,
  normalWholeHeight: "528px",
};

const Colors = {
  yellow: "#F4D04E",
  fontColor: "#111111",
  grayColor: "#6B6B6B",
};

const FontSizes = {
  header: "24px",
  subHeader: "14px",
  description: "16px",
  mobileSubHeader: "12px",
  mobileHeader: "20px",
};

const GiftPage = () => {
  return (
    <>
      <Head>
        <style>{`
          body {
            font-family: 'Figtree', sans-serif;
          }
        `}</style>
      </Head>
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          backgroundColor: "#F4D04E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            width: {
              xs: ScreenSizes.smallWholeWidth,
              sm: ScreenSizes.smallWholeWidth,
              md: ScreenSizes.smallWholeWidth,
              lg: ScreenSizes.normalWholeWidth,
              xl: ScreenSizes.normalWholeWidth,
            },
            height: "auto",
            border: "1px #111111 solid",
            padding: "24px",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            color: Colors.fontColor,
          }}
          boxShadow="10px 10px"
        >
          <Image
            src="/images/frontend_challenge/illustration-article.svg"
            width={336}
            height={200}
            alt="illustration"
            style={{
              borderRadius: "10px",
              height: "auto",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <div
              style={{
                borderRadius: "4px",
                backgroundColor: "#F4D04E",
                paddingTop: "4px",
                paddingLeft: "12px",
                paddingBottom: "4px",
                paddingRight: "12px",
                fontWeight: "bolder",
                fontSize: FontSizes.subHeader,
                fontFamily: "Figtree, sans-serif",
              }}
            >
              Learning
            </div>
            <Typography
              sx={{
                fontSize: FontSizes.subHeader,
                color: Colors.fontColor,
              }}
            >
              Published 21 Dec 2023
            </Typography>
            <Typography
              sx={{
                fontSize: FontSizes.header,
                fontWeight: 800,
                letterSpacing: -1,
                wordSpacing: -3,
              }}
            >
              HTML & CSS foundations
            </Typography>
            <div
              style={{
                fontSize: FontSizes.description,
                color: Colors.grayColor,
                fontFamily: "Figtree, sans-serif",
              }}
            >
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </div>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <Image
              src={"/images/frontend_challenge/image-avatar.webp"}
              width={32}
              height={32}
              alt="profile"
            />
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: FontSizes.subHeader,
              }}
            >
              Gretg Hooper
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default GiftPage;

//interface Selected {
//   coffee: string;
//   added: string;
// }

// const [currentTheme, setCurrentTheme] = useState("");
// const [selected, setSelected] = useState<Selected>({
//   coffee: "",
//   added: "",
// });

// const Result = () => {
//   return (
//     <div>
//       You want {selected.coffee} with {selected.added}, right?
//     </div>
//   );
// };

// const handleClick = (e) => {
//   e.preventDefault();

//   console.log(currentTheme);
//   setSelected({
//     ...selected,
//     [currentTheme]: e.target.name,
//   });
// };

// const items = [
//   {
//     theme: "coffee",
//     question: "Which coffee?",
//     selection: ["americano", "tea", "milk"],
//   },
//   {
//     theme: "added",
//     question: "What to add?",
//     selection: ["sugar", "salt", "cream"],
//   },
// ];

// const SelectItem = ({ item }) => {
//   return (
//     <div>
//       <div>{item.question}</div>
//       <div onClick={() => setCurrentTheme(item.theme)}>
//         {item.selection.map((select, index) => (
//           <Button key={index} name={select} onClick={handleClick}>
//             {select}
//           </Button>
//         ))}
//       </div>
//     </div>
//   );
// };

// return (
//   <div className="pl-10">
//     {items.map((item, index) => (
//       <SelectItem key={index} item={item} />
//     ))}
//     <Button color="primary">Finish</Button>
//     <Result />
//   </div>
// );
