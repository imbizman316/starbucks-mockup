import AccountCreateForm from "@/app/components/pages/account/create/AccountCreateForm";
import { Box, Typography } from "@mui/material";
import React from "react";

const AccountCreatePage = () => {
  return (
    <Box>
      <Box
        sx={{
          maxWidth: 400,
          mx: "auto",
          mt: 4,
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: "28px" }}>
          Create an account
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            color: "#636c7b",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Starbucks® Rewards
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            Join Starbucks Rewards to earn Stars for free food and drinks, any
            way you pay. Get access to mobile ordering, a birthday Reward, and
            moremore.
          </Typography>
        </Box>
      </Box>
      <AccountCreateForm />
    </Box>
  );
};

export default AccountCreatePage;
