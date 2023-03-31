import React, { useEffect } from 'react';
import AddBookmark from '../AddBookmark/AddBookmark';

const Bookmarks = ({bookmarkedBlogs,handelAddReadTime}) => {
    // console.log(bookmarkedBlogs)

    let totalTime= 0;
    for(const time of handelAddReadTime){
        totalTime = totalTime + time.readTime
    }
    return (
        <div className='sticky top-0'>
            <div className='p-3 text-center border-2 mb-5 rounded-lg bg-rose-100 shadow-2xl'>
                <h3 className='text-2xl font-semibold'>Spent time on read: {totalTime}</h3>
            </div>
            <div className='bg-slate-200 p-5 rounded-lg'>
                <h3 className='mb-5 text-xl font-semibold'>Bookmarked Blogs: {bookmarkedBlogs.length}</h3>
               {
                bookmarkedBlogs.map(bookmarkedBlog =><AddBookmark 
                    bookmarkedBlog={bookmarkedBlog}
                    key={bookmarkedBlog.id}
                    ></AddBookmark>)
               }
            </div>
        </div>
    );
};

export default Bookmarks;