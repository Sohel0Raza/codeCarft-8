import React, { useEffect, useState } from 'react';
import Blog from '../Card/Card';
import SpentTime from '../SpentTime/SpentTime';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [blogTime, setBlogTime] = useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs((data)))
    },[])
    const handelAddTime = (blogs) =>{
      const newCard = [...blogTime, blogs]
      setBlogTime(newCard)
    }
    return (
        <div className='grid grid-cols-3 gap-7 mx-20 my-10'>
            <div className='blogs-container col-span-2'>
                {
                    blogs.map(blog => <Blog
                    blog={blog}
                    key={blog.id}
                    handelAddTime={handelAddTime}
                    ></Blog>)
                }
            </div>
            <div className='bookmarked-container relative'>
               <SpentTime blogTime={blogTime}></SpentTime>
            </div>
        </div>
    );
};

export default Blogs;