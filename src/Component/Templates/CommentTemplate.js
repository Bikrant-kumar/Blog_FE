import React from 'react';
import Tab from '../Molecules/Tab';
import CommentCardDetail from '../Organisms/CommentCardDetail';

function CommentTemplate(props) {
    return (
        <div>
            <CommentCardDetail comment={props.comment}/>
        </div>
    )
}

CommentTemplate.propTypes = {

}

export default CommentTemplate

