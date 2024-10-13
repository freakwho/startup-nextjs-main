import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";



const Team = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">

        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">

            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Meet Our Team"
                paragraph="Our success is driven by our talented and dedicated team. Explore the dynamic mix of innovation, collaboration, and expertise that drives us forward."
                mb="44px"
              />
              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-5px] flex flex-wrap">
                  <div className="w-full px-2 lg:w-full">
                    <List text="Tes As Founder & CEO" />
                    <List text="Tes As Chief Technology Officer (CTO)" />
                    <List text="Tes As Chief Data Scientist" />
                    <List text="Tes As Head of AI Consulting" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-3 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[600px] lg:mr-0">
                <Image
                  src="/images/about/teamwork.png"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/teamwork.png"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Team;
