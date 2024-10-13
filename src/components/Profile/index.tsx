const Profile = () => {
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
              <h1 className="m-8 text-2x1 font-bold text-black dark:text-white sm:text-2xl flex justify-center">
                Who We Are
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

          <div className="mx-[-5px] flex-wrap">
            <h1 className="flex justify-center mb-4 text-3x1 sm:text-3xl lg:text-3xl xl:text-3xl font-bold text-black dark:text-white">Our Team</h1>
          </div>
          <div className="flex justify-around mb-10 w-full px-2 lg:w-full">
            <p><List text="Tes As Founder & CEO" /></p>
            <p><List text="Tes As Chief Technology Officer (CTO)" /></p>
          </div>
          <div>
            <h1 className="flex justify-start mb-4 text-3x1 sm:text-3xl lg:text-3xl xl:text-3xl font-bold text-black dark:text-white">Culture</h1>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Profile;
