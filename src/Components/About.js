import { useEffect, useState } from "../lib";
const About = () => {
        const [about, setabout] = useState([]);
        useEffect(() => {
            fetch(`http://localhost:3000/about`)
                .then((rp) => rp.json())
                .then((data) => setabout(data));
        }, []);
        return (
                `<section class="md:pt-[112px] pt-16 relative" id="about">
    <div class="container">
       ${
           about.map((about)=>
           {
               return` <div class="grid grid-cols-1 lg:grid-cols-2 gap-[90px] items-center">
               <div class="relative space-y-4 md:space-y-0">
                   <div>
                       
                       <img src="${about.img}" class="mx-auto hidden dark:block" alt="" />
                   </div>
                   <div class="top-[120px] -left-20 md:absolute">
                       <div class="flex gap-[17px] items-center pt-[25px] pr-[30px] pb-[21px] pl-[26px] bg-white dark:bg-semilight shadow-[25px_0px_65px_rgba(54,32,152,0.11)] rounded-lg">
                           <h3 class="text-[50px] text-[#1cbe59]"><span class="dizme_tm_counter stop" data-from="0" data-to="18" data-speed="2000">1</span></h3>
                           <span class="name text-lg font-secondary leading-[1.3] font-medium">
                                   Years of<br />
                                   Success
                               </span>
                       </div>
                   </div>
                   <div class="bottom-[70px] -right-[30px] md:absolute">
                       <div class="flex gap-[17px] items-center pt-[25px] pr-[30px] pb-[21px] pl-[26px] bg-white dark:bg-semilight shadow-[25px_0px_65px_rgba(54,32,152,0.11)] rounded-lg">
                           <h3 class="text-[50px] text-[#6e50f0] dark:text-[#f0c45c]"><span class="dizme_tm_counter stop" data-from="0" data-to="9" data-speed="2000">1</span></h3>
                           <span class="name text-lg font-secondary leading-[1.3] font-medium">
                                   Total<br />
                                   Projects
                               </span>
                       </div>
                   </div>
               </div>
               <div class="text-center md:text-left">
                   <div class="mb-[25px] lg:max-w-[440px]">
                       <p class="text-custom text-xl md:text-2xl font-medium font-secondary wow fadeInUp" data-wow-duration="1s">${about.title}</p>
                       <h3 class="md:text-[48px] text-[35px] leading-[1.25] mt-1.5 wow fadeInUp" data-wow-duration="1s">${about.slogan}</h3>
                   </div>
                   <p class="text-muted dark:text-darkmuted lg:max-w-[485px] leading-[30px] mb-[47px] wow fadeInUp" data-wow-duration="1s">
                   ${about.describe}
                   </p>
                   <div class="wow fadeInUp" data-wow-duration="1s">
                       <a href="#contact" class="btn-custom">Hire Me</a>
                   </div>
               </div>
           </div>`
           }
           ).join('')
       }

    </div>
    <div class="left-10 top-5 absolute hidden lg:block wow fadeInLeft" data-wow-duration="1s"><img src="assets/img/brushes/about/1.png" alt="" /></div>
    <div class="-bottom-[50px] right-0 absolute hidden lg:block wow fadeInRight" data-wow-duration="1s"><img src="assets/img/brushes/about/2.png" alt="" /></div>
</section>`
    )
}

export default About