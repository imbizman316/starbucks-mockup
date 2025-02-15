import { useCategoriesStore } from "@/app/store/categoriesStore";
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";

const LeftSideMenus = () => {
  const { categories, fetchCategories } = useCategoriesStore();

  useEffect(() => {
    async function fetchSequence() {
      if (categories.length === 0) await fetchCategories();
    }

    fetchSequence();
  }, [categories, fetchCategories]);

  return (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
        },
        flexDirection: "column",
        gap: 3,
        width: "200px",
        paddingY: 5,
        paddingX: 7,
      }}
    >
      {categories.map((category, index) => (
        <Box key={index}>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 560,
              letterSpacing: 1,
              color: "#695844",
              textTransform: "capitalize",
            }}
          >
            {category.category}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default LeftSideMenus;
