import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs((data)))
    },[])
    return (
        <div className='grid grid-cols-2 gap-7 mx-20 my-10'>
            <div className='blogs-container'>
                {
                    blogs.map(blog => <Blog
                    blog={blog}
                    key={blog.id}
                    ></Blog>)
                }
            </div>
            <div className='bookmarked-container'>
                <h2>Spent time on read</h2>
            </div>
        </div>
    );
};

export default Blogs;