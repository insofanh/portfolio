import { useEffect, useState } from "../lib";
const Blog = () => {
        const [blog, setblog] = useState([]);
        useEffect(() => {
            fetch(`http://localhost:3000/blog`)
                .then((rp) => rp.json())
                .then((data) => setblog(data));
        }, []);
        return (
                `<section class="md:pt-[185px] pt-[120px] pb-[100px] md:pb-[160px] relative" id="blog">
    <div class="container relative z-10">
        <div class="grid grid-cols-1">
            <div class="text-center max-w-[680px] mx-auto">
                <p class="text-custom text-[20px] md:text-2xl font-medium font-secondary">From My Blog</p>
                <h3 class="md:text-[48px] text-[35px] leading-[1.25] mb-[23px] mt-1.5">Our Recent Updates, Blog, Tips, Tricks & More</h3>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-[65px] gap-[25px]">
            ${
                blog.map((blog)=>{
                    return`<div class="wow fadeInUp cursor-pointer" data-wow-duration="1s">
                    <div>
                        <div class="overflow-hidden group rounded-xl relative">
                            <img src="./src/imgs/1.jpg" class="scale-100 rounded-xl object-cover w-full h-full min-h-[303px] duration-300 group-hover:scale-110" alt="" />
                            <div class="bg-[#1cbe59] top-[18px] right-[18px] z-20 inline-block absolute rounded-xl text-center py-3 px-5">
                                <h3 class="text-2xl text-white leading-[1.2]">23</h3>
                                <span class="text-white text-sm">Dec</span>
                            </div>
                        </div>
                        <div class="mt-5">
                            <p class="text-custom font-medium font-secondary"><a href="#">${blog.title}</a></p>
                            <h4 class="mt-1 leading-[1.4] text-[21px]"><a href="#/Blog/${blog.id}" class="hover:text-custom">${blog.describe}</a></h4>
                        </div>
                    </div>
                </div>`
                })
            }
            
            
        </div>
    </div>
    <div class="top-[250px] left-[115px] absolute hidden lg:block wow zoomIn" data-wow-duration="1s"><img src="assets/img/brushes/news/1.png" alt="" /></div>
    <div class="top-0 right-0 absolute hidden lg:block wow zoomIn" data-wow-duration="1s"><img src="assets/img/brushes/news/2.png" alt="" /></div>
</section>`
    )
}

export default Blog