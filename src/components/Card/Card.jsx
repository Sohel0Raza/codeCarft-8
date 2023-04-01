import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    // console.log(props)
    const { coverImage, authorImage, authorName, publishDate, readTime, blogTitle } = props.blog
    const handelAddBookmark = props.handelAddBookmark;
    const handelAddReadTime = props.handelAddReadTime;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-2xl mb-7">
            <img className='w-full md:h-96	 p-5 rounded-sm shadow-xl' src={coverImage} alt="Shoes" />
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img className='h-14 w w-14' src={authorImage} alt="" />
                        <div className='px-4'>
                            <h2 className="card-title font-bold">{authorName}</h2>
                            <p>{publishDate}</p>
                        </div>
                    </div>
                    <div>
                        <p>{readTime} min read <span>
                            <button onClick={() => handelAddBookmark(props.blog)} className=' text-rose-400 border-none m-3 p-0 '>
                                <FontAwesomeIcon icon={faBookmark} />
                            </button>
                        </span>
                        </p>
                    </div>
                </div>
                <h2 className='text-2xl font-bold py-1'>{blogTitle}</h2>
                <p>#beginners #programming</p>
                <div className="card-actions">
                    <button onClick={() => handelAddReadTime(props.blog)} className="btn btn-link text-rose-700 px-0">Mark as read</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;