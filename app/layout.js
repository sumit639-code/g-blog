"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import supabase from '@/supabase'
import { useRouter } from 'next/navigation'


export default function RootLayout({ children }) {
  const router = useRouter();
  supabase.auth.onAuthStateChange((event, session) => {
    if (event == "SIGNED_IN") {
      router.push("/Mainpage");
      console.log("SIGNED_IN", session);
    }
  });

  supabase.auth.onAuthStateChange((event, session) => {
    if (event == "SIGNED_OUT") {
      router.push('/Login')
      console.log("SIGNED_OUT", session)};
  });

  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event)
    // if (event == "INITIAL_SESSION") {
    //   router.push('/Login')
    //   console.log("SIGNED_OUT", session)};
  });
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
