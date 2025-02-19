"use client";

import React, { useEffect, useState } from "react";
import NewCustomButton from "../michelaneous/NewCustomButton";
import { Box } from "@mui/material";
import {
  createClientComponentClient,
  User,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

function CreateAccountLoginBar() {
  const supabase = createClientComponentClient();
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setUser(session?.user || null);
        // window.location.reload();
        if (session?.user) console.log("LOG IN SUCCESSFUL");
        else console.log("currently logged out");
        console.log(session?.user);
      } catch (error) {
        console.error(error);
      }
    };
    checkAuth();
  }, [supabase.auth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    window.location.reload();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        },
        gap: 1,
      }}
    >
      {!user ? (
        <NewCustomButton
          color="#FFFFFF"
          fontcolor="#000000b3"
          text="sign in"
          customFunction={() => {
            router.push("/account/login");
          }}
        />
      ) : (
        <NewCustomButton
          color="#016243"
          fontcolor="#cdfff6"
          text="log out"
          customFunction={() => {
            handleLogout();
          }}
        />
      )}
      <NewCustomButton
        color="#000000b3"
        fontcolor="#ffffff"
        text="join now"
        customFunction={() => {
          router.push("/account/create");
        }}
      />
    </Box>
  );
}

export default CreateAccountLoginBar;
