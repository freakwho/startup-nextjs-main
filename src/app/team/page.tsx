import { Metadata } from "next";
import TeamView from "@/components/Team";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Member of Company",
  // other metadata
};


const Team = () => {
  return (
    <>
      <TeamView />
    </>
  );
};

export default Team;