import axios from "axios";
import Data from "./interface";

const TeamView = async()=>{    
        const {data} = await axios.get(process.env.NEXT_PUBLIC_TEAM_API);                
        return (
        <div>
                 {/* Leadership Team */}
           <div className="container py-12 md:py-20 lg:py-28">
             <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                <h1 className="p-5 mb-5 text-3xl font-bold text-black dark:text-white">Leadership Team</h1>
                
                <div className="w-full">
                   <div className="wow fadeInUp" data-wow-delay=".15s">
                      <div className="flex justify-around">
                        <div className="mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                          <img src={data.results[1].picture.large}/>
                        </div>
                        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                          Artur Kovyakuz <br />
                          Founder & CEO
                        </h3>
                      </div>
                      <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                        lived in : Fort-de-France, France
                        <br />
                        Email : artur_kovyakuz@rocketmail.com
                      </p>
                   </div>
                </div>
                
                <div className="w-full">
                   <div className="wow fadeInUp" data-wow-delay=".15s">
                      <div className="flex justify-around">
                        <div className="mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                          <img src={data.results[2].picture.large}/>
                        </div>
                        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                          Aria <br />
                          CTO
                        </h3>
                      </div>
                      <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                        lived in : Wexford, Ireland
                        <br />
                        Email : happyaria@rocketmail.com
                      </p>
                   </div>
                </div>
                
                <div className="w-full">
                   <div className="wow fadeInUp" data-wow-delay=".15s">
                      <div className="flex justify-around">
                        <div className="mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                          <img src={data.results[3].picture.large}/>
                        </div>
                        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                          Sedef <br />
                          Chief Data Scientist
                        </h3>
                      </div>
                      <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                        lived in : Kars, Turkey
                        <br />
                        Email : sedef_pocan@rocketmail.com
                      </p>
                   </div>
                </div>
                
                <div className="w-full">
                   <div className="wow fadeInUp" data-wow-delay=".15s">
                      <div className="flex justify-around">
                        <div className="mb-2 flex h-[70px] w-[70px] items-center justify-normal rounded-md bg-primary bg-opacity-10 text-primary">
                          <img src={data.results[4].picture.large}/>
                        </div>
                        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                          Sebastian <br />
                          Head of Driver Consulting
                        </h3>
                      </div>
                      <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                        lived in : Støvring , Denmark
                        <br />
                        Email : sebastian_madsen@rocketmail.com
                      </p>
                   </div>
                </div>
        
             </div>
           </div>

           {/* Our Team Member */}
           <div className="container py-16 md:py-20 lg:py-28">
             <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                <h1 className="p-5 mb-5 text-3xl font-bold text-black dark:text-white">Team Members</h1>
                
                <div className="w-full">
                   <div className="wow fadeInUp" data-wow-delay=".15s">
                      <div className="flex justify-around">
                        <div className="mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                          <img src={data.results[5].picture.large}/>
                        </div>
                        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                          {data.results[5].name.first} <br />
                          Software Engineering
                        </h3>
                      </div>
                      <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                        lived in : {data.results[5].location.city}, {data.results[5].location.country}
                        <br />
                        Email : {data.results[5].email}
                      </p>
                   </div>
                </div>
                
                <div className="w-full">
                   <div className="wow fadeInUp" data-wow-delay=".15s">
                      <div className="flex justify-around">
                        <div className="mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                          <img src={data.results[6].picture.large}/>
                        </div>
                        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                          {data.results[6].name.first} <br />
                          UX/UI Designer
                        </h3>
                      </div>
                      <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                        lived in : {data.results[6].location.city}, {data.results[6].location.country}
                        <br />
                        Email : {data.results[6].email}
                      </p>
                   </div>
                </div>
                
                <div className="w-full">
                   <div className="wow fadeInUp" data-wow-delay=".15s">
                      <div className="flex justify-around">
                        <div className="mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                          <img src={data.results[7].picture.large}/>
                        </div>
                        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                          {data.results[7].name.first} <br />
                          Cloud Driver Architect
                        </h3>
                      </div>
                      <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                        lived in : {data.results[7].location.city}, {data.results[7].location.country}
                        <br />
                        Email : {data.results[7].email}
                      </p>
                   </div>
                </div>
                
                <div className="w-full">
                   <div className="wow fadeInUp" data-wow-delay=".15s">
                      <div className="flex justify-around">
                        <div className="mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                          <img src={data.results[8].picture.large}/>
                        </div>
                        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                          {data.results[8].name.first} <br />
                          UX/UI Designer
                        </h3>
                      </div>
                      <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                        lived in : {data.results[8].location.city}, {data.results[8].location.country}
                        <br />
                        Email : {data.results[8].email}
                      </p>
                   </div>
                </div>
                
                <div className="w-full">
                   <div className="wow fadeInUp" data-wow-delay=".15s">
                      <div className="flex justify-around">
                        <div className="mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                          <img src={data.results[9].picture.large}/>
                        </div>
                        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                          {data.results[9].name.first} <br />
                          Software Engineer
                        </h3>
                      </div>
                      <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                        lived in : {data.results[9].location.city}, {data.results[9].location.country}
                        <br />
                        Email : {data.results[9].email}
                      </p>
                   </div>
                </div>
                
                <div className="w-full">
                   <div className="wow fadeInUp" data-wow-delay=".15s">
                      <div className="flex justify-around">
                        <div className="mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                          <img src={data.results[10].picture.large}/>
                        </div>
                        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                          {data.results[10].name.first} <br />
                          Driver Consultant
                        </h3>
                      </div>
                      <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                        lived in : {data.results[10].location.city}, {data.results[10].location.country}
                        <br />
                        Email : {data.results[10].email}
                      </p>
                   </div>
                </div>
                
                <div className="w-full">
                   <div className="wow fadeInUp" data-wow-delay=".15s">
                      <div className="flex justify-around">
                        <div className="mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                          <img src={data.results[11].picture.large}/>
                        </div>
                        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                          {data.results[11].name.first} <br />
                          Human Resource
                        </h3>
                      </div>
                      <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                        lived in : {data.results[11].location.city}, {data.results[11].location.country}
                        <br />
                        Email : {data.results[11].email}
                      </p>
                   </div>
                </div>
                
                <div className="w-full">
                   <div className="wow fadeInUp" data-wow-delay=".15s">
                      <div className="flex justify-around">
                        <div className="mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                          <img src={data.results[12].picture.large}/>
                        </div>
                        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                          {data.results[12].name.first} <br />
                          Driver Analytics
                        </h3>
                      </div>
                      <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                        lived in : {data.results[12].location.city}, {data.results[12].location.country}
                        <br />
                        Email : {data.results[12].email}
                      </p>
                   </div>
                </div>
                

             </div>
           </div>

        </div>
        );
                                // {data.results[5].name.first}
        // setUsers(data);
    // const res = await fetch("https://randomuser.me/api/?results=2");
    // const data: Data = await res.json();
    // console.log(data.results[0].phone);
    // console.log(data.results[0].email);
    // console.log(data.results[0].picture.large);    
}

export default TeamView;