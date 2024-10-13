import CompanyHistory from "@/components/About/CompanyHistory";
import Team from "@/components/About/Team";
import Culture from "@/components/About/Culture";
import Us from "@/components/About/Us";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <CompanyHistory />
      <Team />
      <Culture />
      <Us />
    </>
  );
};

export default AboutPage;
