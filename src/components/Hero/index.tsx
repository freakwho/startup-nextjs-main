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
            <h1 className="mb-12 text-5xl font-bold leading-tight text-black dark:text-blue-400">
              Next Driver will install drivers for free and solve driver problems on any device
            </h1>
            <p className="mb-1 text-3xl !leading-relaxed font-bold text-black dark:text-blue-500">
              Next Driver is the most convenient and fastest way of configuring a computer. <br />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
