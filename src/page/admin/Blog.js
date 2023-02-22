import { useEffect, useState } from "../../../lib";


const Blog = () => {
    const [blog, setblog] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/blog")
            .then((Response) => Response.json())
            .then((data) => console.log(data));
    }, []);
    useEffect(() => {
        const btns = document.querySelectorAll('.btn-remove');
        for (let btn of btns) {
            btn.addEventListener('click', function() {
                const id = this.dataset.id;
                fetch(`http://localhost:3000/blog/${id}`, {
                    method: 'DELETE',
                }).then(() => {
                    const newForm = blog.filter((blog) => blog.id != id);
                    setblog(newForm);
                })
            })
        }


    })

    return (
        `<div>Blog</div>`
    )
}

export default Blog