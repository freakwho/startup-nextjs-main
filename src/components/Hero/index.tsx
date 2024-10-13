import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-white dark:bg-gray-dark"
      >
        <div className="relative text-center mx-auto my-auto">
          <Image
            src="/images/hero/Back.png"
            className="object-cover w-full h-full"
            alt="Image alt text"
            width={500}
            height={500}
          />
          <div className="mx-auto max-w-[800px] max-h-[400px] text-center w-full absolute top-20 left-0 right-0 mt-10">
            <h1 className="mb-12 text-3xl font-bold leading-tight text-black dark:text-blue-400 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Next Driver will install drivers for free and solve driver problems on any device
            </h1>
            <p className="mb-1 text-base !leading-relaxed font-bold text-black dark:text-blue-500 sm:text-xl md:text-xl">
              Next Driver is the most convenient and fastest way of configuring a computer. <br />
              <span className="sm:text-lg md:text-lg text-black dark:text-blue-500">The software is provided for free, and is suitable both for professionals and for beginners</span> 
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
