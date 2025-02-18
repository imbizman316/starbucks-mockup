import { steps } from "@/app/data/pages/rewards/data";
import { Box, Typography } from "@mui/material";
// import Link from "next/link";
import React, { ReactNode } from "react";

type Step = {
  id: number;
  title: string;
  content: ReactNode;
};

function StepItem({ step }: { step: Step }) {
  return (
    <Box
      sx={{
        display: "flex",
        // justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        // width: "280px",
        // width: "auto",
        maxWidth: "280px",
        gap: 4,
      }}
    >
      <Box
        sx={{
          borderColor: "#245f4b",
          borderWidth: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "100%",
          padding: 3,
          width: 2,
          height: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 20,
            color: "#245f4b",
            fontWeight: 600,
          }}
        >
          {step.id}
        </Typography>
      </Box>
      <Typography sx={{ fontWeight: 600 }}>{step.title}</Typography>
      <Box>{step.content}</Box>
    </Box>
  );
}

function GettingStarted() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingY: 14,
        flexDirection: "column",
        paddingX: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          paddingBottom: 5,
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: "1.3rem" }}>
          Getting started is easy
        </Typography>
        <Typography>
          Earn Stars and get rewarded in a few easy steps.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 4 }}>
        {steps.map((step) => (
          <StepItem key={step.id} step={step} />
        ))}
      </Box>
    </Box>
  );
}

export default GettingStarted;
