import Data from "../Team/interface";
import axios from "axios";

const Profile = async () => {
  const {data} = await axios.get(
    "https://randomuser.me/api/?results=30"
  );
  const List = ({ text }) => (
    <p className="mb-5 items-center text-lg font-medium text-body-color">
      {text}
    </p>
  );
    return (
    <>
      <section className="relative overflow-hidden">
        <div className="container">

          <div className="mb-20 flex flex-wrap items-center">
            <div>
              <h1 className="m-8 text-6xl font-bold text-black dark:text-white flex justify-center">
                Who We Are
              </h1>
              <p className="text-2xl">
                Actually, next driver is an archive where the drivers for one type devices are stored. 
                For instance, for sound cards. They are sorted within the archive on producers, and release dates. 
                Next Driver is software that saves your time and nerves you spend to install and update the drivers. 
                Next Driver scans a computer by itself, detects which drivers exactly are required, and installs them. 
                Next Driver installs official drivers from the producers, and has one of the world largest driver databases.
              </p>
            </div>
          </div>

          <div className="mx-[-5px] flex-wrap">
            <h1 className="flex justify-center mb-4 text-6xl font-bold text-black dark:text-white">Our Team</h1>
          </div>

          <div className="flex justify-around mb-10 w-full px-2 lg:w-full">
            <div className="flex justify-between">
              <div className="mb-10 w-1/3 px-2">
                <div className="flex justify-around">
                  <div className="mb-2 mr-2 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    <img src={data.results[1].picture.large}/>
                  </div>
                  <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Artur Kovyakuz <br />
                    Founder & CEO
                  </h3>
                </div>
                <p>Expertise: Software Driver Strategy, Business Development, Software Engineering. <br /> <br />
                  Artur founded Next Driver in 2020, driven by a mission to help Indonesian 
                  businesses embrace Software Driver technology.</p>
              </div>


              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <div className="mb-10 w-1/3 px-2">
                <div className="flex justify-around">
                  <div className="mb-2 mr-2 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    <img src={data.results[2].picture.large}/>
                  </div>
                  <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Aria <br />
                    CTO
                  </h3>
                </div>
                <p>Expertise: Machine Learning, Deep Learning, Software Development. <br /><br />
                  Aria leads Next Driver innovation to ensure 
                  that our software driver solutions remain cutting-edge.</p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="flex justify-start mb-4 text-6xl font-bold text-black dark:text-white">Culture</h1>
            <p className="font-medium leading-relaxed text-white text-2xl sm:leading-relaxed">
              At Next Driver, we believe in fostering a work culture that is collaborative, innovative, and inclusive. 
              We encourage every member of our team to challenge conventional thinking and approach problems with a fresh perspective.
            </p>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Profile;
