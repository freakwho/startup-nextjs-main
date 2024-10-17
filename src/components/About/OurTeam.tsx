import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import axios from "axios";

const OurTeam =async () => {
  const {data} = await axios.get(
    "https://randomuser.me/api/?results=30"
  );
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

                    <div className="w-full">
                      <div className="wow fadeInUp" data-wow-delay=".15s">
                          <div className="flex">
                            <div className="mb-2 h-[70px] w-[70px] rounded-md bg-primary bg-opacity-10 text-primary">
                              <img src={data.results[1].picture.large}/>
                            </div>
                            <h3 className="ml-32 mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                              Artur Kovyakuz <br />
                              Founder & CEO
                            </h3>
                          </div>
                      </div>
                    </div>
                    
                    <div className="w-full">
                      <div className="wow fadeInUp" data-wow-delay=".15s">
                          <div className="flex">
                            <div className="mb-2 h-[70px] w-[70px] rounded-md bg-primary bg-opacity-10 text-primary">
                              <img src={data.results[2].picture.large}/>
                            </div>
                            <h3 className="ml-32 mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                              Aria <br />
                              CTO
                            </h3>
                          </div>
                      </div>
                    </div>
                    
                    <div className="w-full">
                      <div className="wow fadeInUp" data-wow-delay=".15s">
                          <div className="flex">
                            <div className="mb-2 h-[70px] w-[70px] rounded-md bg-primary bg-opacity-10 text-primary">
                              <img src={data.results[3].picture.large}/>
                            </div>
                            <h3 className="ml-32 mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                              Sedef <br />
                              Chief Data Scientist
                            </h3>
                          </div>
                      </div>
                    </div>
                    
                    <div className="w-full">
                      <div className="wow fadeInUp" data-wow-delay=".15s">
                          <div className="flex">
                            <div className="mb-2 h-[70px] w-[70px] rounded-md bg-primary bg-opacity-10 text-primary">
                              <img src={data.results[4].picture.large}/>
                            </div>
                            <h3 className="ml-32 mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                              Sebastian <br />
                              Head of Driver Consulting
                            </h3>
                          </div>
                      </div>
                    </div>
                                        
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

export default OurTeam;
