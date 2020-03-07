import React from 'react'
import { Button } from 'react-bootstrap'

const button = (props) => {
    return (
        <Button
            variant={props.variant}
            onClick={props.clicked}
            type={props.type}
        >
            {props.text}
        </Button>
    )
}

export default button;