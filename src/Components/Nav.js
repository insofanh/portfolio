import { menu } from "../data/fakedata";

const MainNav = () => {
        return `
        <div class="container">
            <div class="flex items-center justify-between md:block">
                <div class="justify-between items-center flex w-full">
                    <div class="z-50 relative">
                        <a href="index.html">

                            <!-- <img src="assets/img/logo/dark.png" class="lg:max-w-[150px] max-w-[90px] hidden dark:block" alt="" /> -->
                        </a>
                    </div>
                    <div>
                        <button class="block md:hidden outline-none mobile-menu-button">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                    </div>
                    <div class="hidden md:block">
                        <ul class="list-none flex space-x-2 lg:space-x-[30px] items-center">
                        ${menu.map((menus) => {
                            return `
                            <li class="home active"><a href=" " class="text-white text-base font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2">${menus.name}</a></li>
                            `
                            }).join(' ')}
                            
                            <a href="#" class="btn-outline-custom relative">Download CV</a>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="hidden mobile-menu md:hidden">
                <div class="pt-5">
                    <ul>
                        <li class="home active"><a href="#home" class="text-base font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2">Home</a></li>
                        <li class="about"><a href="#about" class="text-base font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2">About</a></li>
                        <li class="portfolio"><a href="#portfolio" class="text-base font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2">Portfolio</a></li>
                        <li class="service"><a href="#service" class="text-base font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2">Service</a></li>
                        <li class="blog"><a href="#blog" class="text-base font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2">Blog</a></li>
                        <li class="contact"><a href="#contact" class="text-base font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2">Contact</a></li>
                        <a href="#" class="btn-outline-custom relative">Download CV</a>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</div>
`;
};
export default MainNav;