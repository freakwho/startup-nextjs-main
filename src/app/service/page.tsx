import { Metadata } from "next";
import FeaturesView from "@/components/Features";

export const metadata: Metadata = {
  title: "Service Page",
  description: "This is Our Services",
  // other metadata
};

const Features = () => {
  return (
    <>
      <FeaturesView />
    </>
  );
};

export default Features;
