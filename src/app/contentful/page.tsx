import ContentfulView from "@/components/Contentful";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Page",
  description: "This is Our Content",
  // other metadata
};

const Contentful = () => {
  return (
    <>
      <ContentfulView />
    </>
  );
};

export default Contentful;
