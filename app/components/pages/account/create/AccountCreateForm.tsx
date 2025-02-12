"use client";

import React, { useState } from "react";
import * as z from "zod";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";

const signupSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignUpFormData = z.infer<typeof signupSchema>;

const AccountCreateForm = () => {
  const supabase = createClientComponentClient();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupError, setSignupError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    setIsSubmitting(true);
    setSignupError(null);

    try {
      const { data: user, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (error) throw error;

      const { error: profileError } = await supabase.from("profiles").insert([
        {
          id: user.user?.id,
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
        },
      ]);

      if (profileError) throw profileError;

      alert("Signup successful check your email for verification.");
    } catch (error) {
      setSignupError((error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        p: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Sign Up
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="First Name"
          fullWidth
          margin="normal"
          {...register("firstName")}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />
        <TextField
          label="Last Name"
          fullWidth
          margin="normal"
          {...register("lastName")}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        {signupError && <Typography color="error">{signupError}</Typography>}

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          disabled={isSubmitting}
          style={{
            backgroundColor: "#1f654b",
            borderRadius: "50px",
          }}
        >
          {isSubmitting ? <CircularProgress size={24} /> : "Sign Up"}
        </Button>
      </form>
    </Box>
  );
};

export default AccountCreateForm;
