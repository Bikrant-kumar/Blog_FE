import React from 'react';
import CommentCard from '../Molecules/CommentCard';

function CommentCardDetail(props) {
    return (
        <div>
             {
                props.comment &&
                props.comment.map((commentList,index) => <CommentCard comment={commentList} index={index}/>)
            }
        </div>
    )
}

export default CommentCardDetail

