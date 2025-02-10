import AccountCreateForm from "@/app/components/pages/account/create/AccountCreateForm";
import { Box, Typography } from "@mui/material";
import React from "react";

const AccountCreatePage = () => {
  return (
    <Box>
      <Typography sx={{ fontWeight: 600, fontSize: "28px" }}>
        Create an account
      </Typography>
      <Box>
        <Typography>Starbucks® Rewards</Typography>
        <Typography>
          Join Starbucks Rewards to earn Stars for free food and drinks, any way
          you pay. Get access to mobile ordering, a birthday Reward, and
          moremore.
        </Typography>
      </Box>
      <AccountCreateForm />
    </Box>
  );
};

export default AccountCreatePage;
