import React from 'react';
import BlogCard from '../Molecules/BlogCard';

function BlogCardDetail(props) {
    return (
        <div>
            {
                props.blog &&
                props.blog.map((blogList,index) => <BlogCard blog={blogList} index={index}/>)
            }
        </div>
    )
}

export default BlogCardDetail

