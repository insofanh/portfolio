import Blog from "./src/Components/Blog";
import { render, router } from "./src/lib";
import BlogAdd from "./src/page/admin/BlogAdd";
import BlogDetails from "./BlogDetails";
import HomePage from "./src/page/HomePage";
import homeAdmin from "./src/page/admin/homeAdmin";


const app = document.querySelector('#app');

router.on("/admin", () => render(homeAdmin, app));
router.on("/", () => render(HomePage, app));
router.on("Blog/:id", ({ data }) => render(() => BlogDetails(data), app));
router.on("/admin/Blog", () => render(Blog), app);
router.on("/admin/BlogAdd", () => render(BlogAdd), app);
router.resolve()