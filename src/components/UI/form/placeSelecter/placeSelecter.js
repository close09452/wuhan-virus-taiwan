import React from 'react'
import DropDown from '../../dropdown/dropdown'
import { Form } from 'react-bootstrap'

const placeSelecter = (props) => (
    <div>
        <Form.Group>
            <Form.Label>請選擇確診地區</Form.Label>
            <DropDown options={props.options} changed={props.changed} />
        </Form.Group>
    </div>

)

export default placeSelecter;