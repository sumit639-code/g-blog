"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import supabase from "@/supabase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  let count = 0;
  // Initialize the user based on the stored session
  const router = useRouter();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event == "SIGNED_IN") {
        router.push("/Mainpage");
        console.log("SIGNED_IN", session);
      }
    });

    supabase.auth.onAuthStateChange((event, session) => {
      if (event == "SIGNED_OUT") {
        router.push("/Login");
        console.log("SIGNED_OUT", session);
      }
    });
    supabase.auth.onAuthStateChange((event, session) => {
      // console.log(event, session);
      // const data = session.access_token;
      // console
      if (event == "INITIAL_SESSION" && session == !null) {
        supabase.auth.setSession(session.refresh_token, session.access_token);
        console.log(event, session);
      }
      if (event == "INITIAL_SESSION" && session == null) {
        router.push("/Login");
      }
    });
  }, [count]);

  // const { data, error } = supabase.auth.setSession({
  //   access_token,
  //   refresh_token,
  // });
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
