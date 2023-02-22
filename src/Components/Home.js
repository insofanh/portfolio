import { useEffect, useState } from "../lib";



const Home = () => {

        const [info, setInfor] = useState([]);
        useEffect(() => {
            fetch("http://localhost:3000/info")
                .then((rp) => rp.json())
                .then((data) => setInfor(data));
        }, []);


        return `<section class="flex items-center dark:bg-[url('../img/slider/2.jpg')] bg-center bg-cover lg:h-screen py-24 relative dizme_tm_header" id="home">
    <div class="container">
        <div class="grid lg:grid-cols-2 items-center gap-[25px]">
            <div class="order-2 lg:order-1">
                <h3 class="text-custom text-[21px] text-center lg:text-left lg:text-[25px] xl:text-[45px] leading-[1.3] font-medium font-secondary">Hello, I'm</h3>
                ${
                    info.map((info)=>
                    {
                      return`
                      <h1 class="text-[42px] lg:text-[60px] xl:text-[85px] text-center lg:text-left mb-[11px] lg:mb-[18px] leading-[1.3] font-medium font-secondary">${info.name}</h1>
                <p class="lg:mb-9 mb-[15px] text-lg lg:text-[19px] xl:text-[28px] text-center lg:text-left font-medium">
                    A <span class="text-[#1cbe59]">Web Designer</span> From <span class="text-[#8067f0] dark:text-[#f0c45c]">${info.title}</span>
                </p>
                <p class="lg:mb-[42px] text-muted dark:text-white mb-[30px] text-base text-center lg:text-left xl:text-[23px] leading-[1.5] max-w-[640px] mx-auto lg:ml-0">${info.describe}</p>
                      `
                    }
                    ).join('')
                }

                
                <div class="flex items-center justify-center lg:justify-start gap-[25px]">
                    <a href="#about" class="btn-custom relative">About Me</a>
                    <ul class="flex items-center gap-2">
                        <li>
                            <a href="#"><i class="icon-facebook-1"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="icon-twitter-1"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="icon-linkedin-1"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="icon-behance"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="order-1 lg:order-2">
                <div class="relative">
                    <img src="assets/img/slider/avt.png" class="mx-auto max-w-[200px] lg:max-w-[350px] xl:max-w-[600px]" alt="" />
                    <span class="left-24 shadow-[24px_0px_72px_rgb(54,32,152,0.3)] top-5 hidden lg:flex items-center rounded-lg bg-[#390000] w-[75px] h-[75px] absolute anim_moveBottom">
                            <img class="w-10 h-10 mx-auto" src="assets/img/svg/skills/illustrator.svg" alt="" />
                        </span>
                    <span class="right-[110px] shadow-[24px_0px_72px_rgb(54,32,152,0.3)] top-20 hidden lg:flex items-center rounded-lg bg-[#001631] w-[75px] h-[75px] absolute anim_moveBottom">
                            <img class="w-10 h-10 mx-auto" src="assets/img/svg/skills/photoshop.svg" alt="" />
                        </span>
                    <span class="left-[100px] shadow-[24px_0px_72px_rgb(54,32,152,0.3)] bottom-20 hidden lg:flex items-center rounded-lg bg-white w-[75px] h-[75px] absolute anim_moveBottom">
                            <img class="w-10 mx-auto h-10" src="assets/img/svg/skills/javascript.svg" alt="" />
                        </span>
                </div>
            </div>
        </div>
    </div>
    <div class="dizme_tm_down text-center max-[1024px]:!bottom-6">
        <a class="anchor inline-block" href="#process">
            <svg width="26px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 1.5;">
                    <path id="wheel" d="M123.359,79.775l0,72.843" fill="none" class="stroke-[20px] stroke-dark dark:stroke-white" />
                    <path
                        id="mouse"
                        fill="none"
                        d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                        class="stroke-[20px] stroke-dark dark:stroke-white"
                    />
                </svg>
        </a>
    </div>
</section>`

}

export default Home