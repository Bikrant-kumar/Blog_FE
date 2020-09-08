import React from 'react';
import BlogCardDetail from '../Organisms/BlogCardDetail';

function BlogTemplate(props) {
    return (
        <div>
            <BlogCardDetail blog={props.blog}/> 
        </div>
    )
}

export default BlogTemplate

