import React, { useState } from 'react'
import { Children } from 'react'
import { InputGroup, DropdownButton, Dropdown, FormControl, Button, Form } from 'react-bootstrap'
import Calendar from 'react-calendar'

const CaseUpdater = () => {


    const [isCalendar, setCalendar] = useState(false);
    const [updateDate, setUpdateDate] = useState(new Date())
    const [updatePlace, setUpdatePlace] = useState('請選擇地點')

    const showCalendar = () => {
        setCalendar(!isCalendar);
    }
    const formatDate = (date) => {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return ([year, month, day].join('-'));
    }

    const dateSelect = (date) => {
        setUpdateDate(date);
        setCalendar(false);
    }
    const placeSelect = (event) => {
        console.log(event);
        setUpdatePlace(event);
    }

    return (

        <div style={{ float: 'left', margin: "10px" }} >
            <form>
                <InputGroup.Prepend style={{ marginBottom: "10px" }} >
                    <Button variant="outline-secondary" onClick={showCalendar}>確診日期</Button>
                </InputGroup.Prepend>
                {isCalendar && (<Calendar style={{ marginBottom: "10px" }} value={updateDate} onClickDay={date => dateSelect(date)}></Calendar>)}
                <FormControl placeholder={formatDate(updateDate)} />
                <DropdownButton
                    style={{ marginBottom: "10px" }}
                    as={InputGroup.Append}
                    variant="outline-secondary"
                    title={updatePlace}
                    id="input-group-dropdown-2"
                    onSelect={(e) => placeSelect(e)}
                >
                    <Dropdown.Item href="#/place-1" eventKey="基隆市">基隆市</Dropdown.Item>
                    <Dropdown.Item href="#/place-2" eventKey="台北市">台北市</Dropdown.Item>
                    <Dropdown.Item href="#/place-3" eventKey="新北市">新北市</Dropdown.Item>
                    <Dropdown.Item href="#/place-4" eventKey="桃園縣">桃園縣</Dropdown.Item>
                    <Dropdown.Item href="#/place-5" eventKey="新竹市">新竹市</Dropdown.Item>
                    <Dropdown.Item href="#/place-6" eventKey="新竹縣">新竹縣</Dropdown.Item>
                    <Dropdown.Item href="#/place-7" eventKey="苗栗縣">苗栗縣</Dropdown.Item>
                    <Dropdown.Item href="#/place-8" eventKey="台中市">台中市</Dropdown.Item>
                    <Dropdown.Item href="#/place-9" eventKey="彰化縣">彰化縣</Dropdown.Item>
                    <Dropdown.Item href="#/place-10" eventKey="南投縣">南投縣</Dropdown.Item>
                    <Dropdown.Item href="#/place-11" eventKey="雲林縣">雲林縣</Dropdown.Item>
                    <Dropdown.Item href="#/place-12" eventKey="嘉義市">嘉義市</Dropdown.Item>
                    <Dropdown.Item href="#/place-13" eventKey="嘉義縣">嘉義縣</Dropdown.Item>
                    <Dropdown.Item href="#/place-14" eventKey="台南市">台南市</Dropdown.Item>
                    <Dropdown.Item href="#/place-15" eventKey="高雄市">高雄市</Dropdown.Item>
                    <Dropdown.Item href="#/place-16" eventKey="屏東縣">屏東縣</Dropdown.Item>
                    <Dropdown.Item href="#/place-17" eventKey="台東縣">台東縣</Dropdown.Item>
                    <Dropdown.Item href="#/place-18" eventKey="花蓮縣">花蓮縣</Dropdown.Item>
                    <Dropdown.Item href="#/place-19" eventKey="宜蘭縣">宜蘭縣</Dropdown.Item>
                    <Dropdown.Item href="#/place-20" eventKey="澎湖縣">澎湖縣</Dropdown.Item>
                    <Dropdown.Item href="#/place-21" eventKey="金門縣">金門縣</Dropdown.Item>
                    <Dropdown.Item href="#/place-22" eventKey="連江縣">連江縣</Dropdown.Item>
                </DropdownButton>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>詳細內容</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>備註</Form.Label>
                    <Form.Control as="textarea" rows="" />
                </Form.Group>
                <InputGroup.Append>
                    <Button style={{ marginBottom: "10px" }} variant="outline-primary">增加病例</Button>
                </InputGroup.Append>
            </form>
        </div >

    )


}


export default CaseUpdater;


