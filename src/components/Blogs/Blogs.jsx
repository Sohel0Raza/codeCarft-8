import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs((data)))
    },[])
    return (
        <div>
            <div className='blogs-container'>
                {
                    blogs.map(blog => console.log(blog))
                }
            </div>
            <div className='bookmarked-container'>
                
            </div>
        </div>
    );
};

export default Blogs;