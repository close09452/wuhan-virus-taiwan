import React from 'react'
import { Form } from 'react-bootstrap'

const inputForm = (props) => (
    <Form.Group controlId={props.id}>
        <Form.Label>{props.labelText}</Form.Label>
        <Form.Control
            required={props.required}
            as={props.type}
            rows={props.rows}
            placeholder={props.placeholder}
            maxLength={props.maxLength}
            onChange={props.changed} />
        <Form.Control.Feedback type="invalid">
            {props.invalidText}
        </Form.Control.Feedback>
    </Form.Group>
)

export default inputForm;