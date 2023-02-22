import { useEffect, useState } from "../lib";

const Comments = () => {

        const [comment, setcomment] = useState([]);
        useEffect(() => {
            fetch("http://localhost:3000/comment")
                .then((rp) => rp.json())
                .then((data) => setcomment(data));
        }, []);

        return (
                `<section class="relative pb-[127px] md:pb-[187px]">
        <div class="px-4 lg:px-0 relative z-10">
            <div class="grid grid-cols-1">
                <div class="text-center max-w-[680px] mx-auto">
                    <p class="text-custom text-[20px] md:text-2xl font-medium font-secondary">Testimonials</p>
                    <h3 class="md:text-[48px] text-[35px] leading-[1.25] mb-[23px] mt-1.5">What My Clients Say</h3>
                    <p class="text-muted dark:text-darkmuted text-lg leading-[30px]">Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
                </div>
            </div>
            <div class="grid grid-cols-1 mt-20 relative bg-cover bg-top dark:bg-[url('../img/testimonials/bg-client-dark.png')] bg-[url('../img/testimonials/bg-client.png')]">
                <div id="owl-demo" class="owl-carousel">
                    ${
                        comment.map((comment)=>{
                            return`<div class="text-center max-w-[900px] mx-auto">
                            <div class="mb-[35px]">
                                <img class="!w-[65px] mx-auto" src="assets/img/svg/testimonials/quote.svg" alt="" />
                            </div>
                            <div>
                                <p class="md:text-[30px] text-xl text-muted dark:text-darkmuted italic leading-[1.6]">
                                    ${comment.content}
                                </p>
                            </div>
                            <div class="flex items-center gap-[25px] mt-[51px] justify-center">
                            <img src="assets/img/testimonials/4.jpg" class="!w-[60px] rounded-full" alt="" />
                            <div class="text-start">
                                <h5 class="font-secondary text-2xl font-medium">${comment.user}</h5>
                                <p class="text-muted dark:text-darkmuted text-base leading-7">${comment.address}</p>
                            </div>
                        </div>
                        </div>  `
                        }).join('')
                    }
                </div>
            </div>
        </div>
        <div class="absolute right-5 -top-[120px] hidden lg:block wow fadeInRight" data-wow-duration="1s"><img src="assets/img/brushes/testimonials/1.png" alt="" /></div>
    </section>`
    )
}

export default Comments