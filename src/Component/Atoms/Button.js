import React from 'react';
import Button from '@material-ui/core/Button';

function MyButton(props) {
    return (
        <Button onClick={props.OnClick} variant={props.variant}>
            {props.text}
        </Button>
    )
}

export default MyButton

