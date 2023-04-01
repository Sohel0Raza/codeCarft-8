import React, { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Blog from '../Card/Card';
import Bookmarks from '../Bookmarks/Bookmarks';


const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [bookmarkedBlogs, setBookmarksBlogs] = useState([])
    const [readTime, setReadTime] = useState([])
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    const handelAddBookmark = (blog) => {
        const isExist = bookmarkedBlogs.some(bookmarkedBlog => bookmarkedBlog.id == blog.id)
        if (isExist) {
            toast("Yuuups!! You Have Already Bookmarked This Blog")
        }
        else {
            const updatedBookmarkBlogs = [...bookmarkedBlogs, blog]
            setBookmarksBlogs(updatedBookmarkBlogs)
        }

    }
    const handelAddReadTime = (blogs) => {
        const updateReadTime = [...readTime, blogs]
        setReadTime(updateReadTime)
    }
    return (
        <div className='md:grid md:grid-cols-3 md:gap-7 md:w-10/12 mx-auto my-10'>
            <div className='blogs-container md:col-span-2'>
                {
                    blogs.map(blog => <Blog
                        blog={blog}
                        key={blog.id}
                        handelAddBookmark={handelAddBookmark}
                        handelAddReadTime={handelAddReadTime}
                    ></Blog>)
                }
            </div>
            <div className='bookmarked-container relative'>
                <Bookmarks bookmarkedBlogs={bookmarkedBlogs} handelAddReadTime={readTime}></Bookmarks>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Blogs;