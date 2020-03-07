import React from 'react'
import { Form } from 'react-bootstrap'

const dropDown = (props) => {

    const dropDownOption = props.options.map((e) => (<option key={e}>{e}</option>))
    return (
        <Form.Control as="select" onChange={props.changed} >
            {dropDownOption}
        </Form.Control>
    )
}

export default dropDown;