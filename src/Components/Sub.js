const Sub = () => {
    return (
        `<section>
   <div class="container">
       <div class="bg-[url('../img/subscribe/dots.jpg')] relative rounded-xl py-[90px] px-7 md:px-[86px]">
           <div class="bg-[#8067f0]/90 absolute inset-0 rounded-xl"></div>
           <div class="grid grid-cols-1 lg:grid-cols-2 relative gap-y-10 lg:gap-y-0 items-center gap-4">
               <div class="text-white wow fadeInLeft" data-wow-duration="1s">
                   <p class="md:text-[21px] text-[19px] font-medium font-secondary">Subscribe Now</p>
                   <h4 class="mt-4 text-[35px] md:text-5xl">Get My Newsletter</h4>
                   <p class="mt-4 text-lg">Get latest news, updates, tips and trics in your inbox</p>
               </div>
               <div>
                   <div class="relative wow fadeInRight" data-wow-duration="1s">
                       <input type="email" class="form-input custom-mail" placeholder="Your email here" />
                       <input type="submit" value="Send Now" class="sub-btn" />
                   </div>
               </div>
           </div>
       </div>
   </div>
</section>`
    )
}

export default Sub