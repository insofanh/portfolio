import About from "../Components/About"
import Blog from "../Components/Blog"
import Comments from "../Components/Comments"
import Contact from "../Components/Contact"
import Header from "../Components/Header"
import Home from "../Components/Home"

import Process from "../Components/Process"
import Skills from "../Components/Skills"
import Sub from "../Components/Sub"

const HomePage = () => {
    return (
        `<div>${Header()}</div>
      ${Home()}
        ${Process()}
        ${About()}
       
        ${Skills()}
        ${Comments()}
        ${Blog()}
        ${Sub()}
        ${Contact()}
        `

    )
}

export default HomePage