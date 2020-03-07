import React from 'react'
import { Form, Col } from 'react-bootstrap'

const positionForm = (props) => {
    const form = props.formElements.map(
        (formElement) => (
            <Col key={formElement.id}>
                <Form.Label>{formElement.label}</Form.Label>
                <Form.Control
                    id={formElement.id}
                    readOnly={formElement.readOnly}
                    value={formElement.value} />
            </Col>
        )
    );
    return (
        <Form.Group>
            <Form.Row>
                {form}
            </Form.Row>
            <Form.Label style={{ color: 'Red' }}>{props.warningText}</Form.Label>
        </Form.Group>
    );
}

export default positionForm;