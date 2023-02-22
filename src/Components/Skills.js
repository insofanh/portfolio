import { useEffect, useState } from "../lib";
const Skills = () => {
        const [skills, setskills] = useState([]);
        useEffect(() => {
            fetch("http://localhost:3000/skills")
                .then((rp) => rp.json())
                .then((data) => setskills(data));
        }, []);

        return (
                `<section>
   <div class="container relative z-10">
       <div class="grid grid-cols-1 lg:grid-cols-2 gap-[200px] items-center">
           <div>
           <div class="mb-[23px] wow fadeInUp" data-wow-duration="1s">
                        <p class="text-custom text-[20px] md:text-2xl font-medium font-secondary">Design is Life</p>
                        <h3 class="md:text-[48px] text-[35px] leading-[1.25] mt-1.5">I Develop Skills Regularly to Keep Me Update</h3>
                    </div>
                    <p class="text-muted dark:text-darkmuted lg:max-w-[485px] leading-[30px] wow fadeInUp" data-wow-duration="1s">Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
           ${
               skills.map((skills)=>{
                   return`
                   
                   
                   <div class="pt-[30px] space-y-[22px] wow fadeInUp" data-wow-duration="1s">
                   <div class="w-full mb-[22px] relative" data-value="85" data-color="#f75023">
                       <div class="mb-[9px] block"><span class="text-lg font-medium font-secondary inline-block">${skills.nameskills}</span><span class="absolute right-[15%] text-custom">${skills.percent}</span></div>
                       <div class="w-full bg-[#e7e5f1] rounded-full h-2">
                           <div class="bg-custom h-2 rounded-full" style="width: ${skills.percent};"></div>
                       </div>
                   </div>
                   
               </div>
                   `

                   
               }
               ).join('')
           }
              
           </div>
           <div class="relative">
               <div>
                   <img src="assets/img/skills/1.jpg" class="max-h-[800px] mx-auto dark:hidden" alt="" />
                   <img src="assets/img/skills/2.jpg" class="max-h-[800px] mx-auto hidden dark:block" alt="" />
               </div>
           </div>
       </div>
   </div>
</section>`
    )
}

export default Skills