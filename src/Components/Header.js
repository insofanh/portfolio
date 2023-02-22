import MainNav from "./Nav"

const Header = () => {
    return (
        `<div class="fixed top-0 w-full z-40">
        <nav class="py-[25px] relative ease-in-out duration-500 mobile-nav max-[768px]:shadow-[0px_0px_10px_rgb(0,0,0,0.1)] max-[768px]:py-[10px] max-[768px]:bg-white max-[768px]:dark:py-[20px] max-[768px]:dark:bg-semidark">
            ${MainNav()}
        </div>`
    )
}

export default Header