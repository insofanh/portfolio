import { useEffect, useState } from "./src/lib";
const BlogDetails = () => {

        const [blogdetails, setblogdetails] = useState([]);
        useEffect(() => {
            fetch(`http://localhost:3000/blogdetails/`)
                .then((rp) => rp.json())
                .then((data) => setblogdetails(data));
        }, []);
        return `
              ${Array.isArray(blogdetails) && blogdetails.map((blog)=>{
                  return `
                    <div>
                        <img src="${blog.img}" class="h-[350px] object-cover w-full rounded-xl" alt="">
                        <h3 class="mt-[37px] text-[30px] font-medium ">${blog.title}</h3>
                        <p class="font-secondary text-muted dark:text-darkmuted mt-1">${blog.detailstitle}</p>
                        <div class="mt-[23px] space-y-5">
                            <p class="text-muted dark:text-darkmuted">${blog.content}</p>
                        </div>
                    </div>
                  `
              })}
        `;
};

export default BlogDetails;