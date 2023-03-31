import React from 'react';

const AddBookmark = ({bookmarkedBlog}) => {
    // console.log(bookmarkedBlog)
    return (
        <div className='p-3 border-2 mb-5 rounded-lg bg-zinc-100 shadow-2xl'>
            <h4 className='text-xl'>{bookmarkedBlog.blogTitle}</h4>
        </div>
    );
};

export default AddBookmark;