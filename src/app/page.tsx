import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Profile from "@/components/Profile";
import { Metadata } from "next";
import Features from "./service/page";

export const metadata: Metadata = {
  title: "Next Driver",
  description: "Your Trusted SoftWare Driver",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Profile/>
      <Features />
      <Testimonials />
    </>
  );
}
