import React from 'react'
import { Button, InputGroup, Form } from 'react-bootstrap'
import Calendar from 'react-calendar'

const dateForm = (props) => (
    <div>
        <InputGroup
            id="updateForm.date.button"
            style={{ marginBottom: "10px" }}
        >
            <Button
                variant="outline-primary"
                onClick={props.clicked}
            >確診日期</Button>
        </InputGroup>

        {
            props.showCalendar &&
            (
                <Calendar
                    style={{ marginBottom: "10px" }}
                    value={props.defaultDate}
                    onClickDay={props.dateClickd}
                />
            )
        }

        <Form.Group
            controlId="updateForm.date.textarea"
            style={{ marginBottom: "10px" }}
        >
            <Form.Control
                required
                as="textarea"
                value={props.dateText}
                readOnly />
        </Form.Group>
    </div>

)

export default dateForm;