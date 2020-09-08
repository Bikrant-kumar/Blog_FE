import React from 'react';
import CommentCardDetail from '../Organisms/CommentCardDetail';

function CommentTemplate(props) {
    return (
        <CommentCardDetail comment={props.comment}/>
    )
}

export default CommentTemplate

