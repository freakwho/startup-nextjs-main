import Image from "next/image";

const Culture = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/cultured.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/cultured.png"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
          <h1 className="mb-4 text-3x1 sm:text-3xl lg:text-3xl xl:text-3xl font-bold text-black dark:text-white">Culture</h1>
          <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            At Next Driver, we believe in fostering a work culture that is collaborative, innovative, and inclusive. 
            We encourage every member of our team to challenge conventional thinking and approach problems with a fresh perspective. 
          </p>
            <div className="max-w-[470px]">
              <div className="mt-5 mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Growth and Learning
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The field of software driver is constantly evolving, and so are we. 
                  We invest heavily in the continuous development of our team through workshops, training, 
                  and knowledge-sharing sessions.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Innovation
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We are committed to pushing the boundaries of what’s possible with software driver. 
                  Every member of our team is encouraged to explore new ideas, test new technologies, 
                  and bring creative solutions to the table.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
