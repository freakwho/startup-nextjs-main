const CompanyHistory = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container">
          <div className="-mx-6 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="max-w-[570px] lg:mb-1">
                <h2 className="text-4xl font-bold text-body-color sm:text-4x1">
                  Company History
                </h2>
              </div>
            </div>
            <div className="m-7">
              <h1 className="m-8 text-2x1 font-bold text-black dark:text-white sm:text-2xl flex justify-center">
                Who We Are
              </h1>
              <p>
                Actually, next driver is an archive where the drivers for one type devices are stored. 
                For instance, for sound cards. They are sorted within the archive on producers, and release dates. 
                Next Driver is software that saves your time and nerves you spend to install and update the drivers. 
                Next Driver scans a computer by itself, detects which drivers exactly are required, and installs them. 
                Next Driver installs official drivers from the producers, and has one of the world largest driver databases.
              </p>
              <h1 className="m-8 text-2x1 font-bold text-black dark:text-white sm:text-2xl flex justify-center">
                Our Story
              </h1>
              <p>
                From a small piece of software written on pure enthusiasm 8 years ago, we have transformed into the company which has helped more than 40 million people worldwide to configure their computers! <br/><br/>

                During this time, our software has become incredibly faster and smarter. Today, Next Driver is the largest database of unique drivers in the world, located on ultra high speed servers 
                all over the world. In order to perform the process of driver installation always quickly and with the highest possible quality, we use machine learning technologies that makes our selection 
                algorithm even better and more accurate. We have managed to achieve all this in such a way that the software remains absolutely free of charge, and everyone can use it. <br/><br/>

                My team and I are proud of our product, and we hope it will become your reliable assistant in configuring any computer in the shortest possible time frame. We spend all our time in order to save yours!
              </p>
            </div>
          </div>
        </div>

        <div>
          <span className="absolute left-0 top-0 z-[-1]">
            <svg
              width="287"
              height="254"
              viewBox="0 0 287 254"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
                fill="url(#paint0_linear_111:578)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_111:578"
                  x1="-40.5"
                  y1="117"
                  x2="301.926"
                  y2="-97.1485"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-0 top-0 z-[-1]">
            <svg
              width="628"
              height="258"
              viewBox="0 0 628 258"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
                fill="url(#paint0_linear_0:1)"
              />
              <path
                opacity="0.1"
                d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
                fill="url(#paint1_linear_0:1)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0:1"
                  x1="644"
                  y1="221"
                  x2="429.946"
                  y2="37.0429"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0:1"
                  x1="18.3648"
                  y1="166.016"
                  x2="105.377"
                  y2="32.3398"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </section>
    </>
  );
};

export default CompanyHistory;
