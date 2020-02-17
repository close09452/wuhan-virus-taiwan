import React, { useState } from 'react'
import { InputGroup, DropdownButton, Dropdown, Button, Form } from 'react-bootstrap'
import Calendar from 'react-calendar'
import { connect } from 'react-redux'
import Hoc from '../../hoc/auxiliary'
import * as actions from '../../store/actions/index'

const CaseUpdater = (props) => {


    const [isCalendar, setCalendar] = useState(false);
    const [updateDate, setUpdateDate] = useState(new Date());
    const [updatePlace, setUpdatePlace] = useState('請選擇地點');
    const [updataContent, setUpdateContent] = useState('');
    const [updateNote, setUpdateNote] = useState('');
    const [updatePosition, setUpdatePosition] = useState({ lat: 23.600, lng: 120.832 });
    const [validated, setValidated] = useState(false);

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
        setUpdatePlace(event.target.value);
        let mapProps = {};
        switch (event.target.value) {
            case "基隆市":
                mapProps = {
                    zoom: 12,
                    position: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                console.log(mapProps, '基隆市');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            case "台北市":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 25.0288067,
                        lng: 121.486402
                    }
                }
                console.log(mapProps, '台北市');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            case "新北市":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 24.9875278,
                        lng: 121.3646036
                    }
                }
                console.log(mapProps, '新北市');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            case "桃園市":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 25.0221456,
                        lng: 121.1004783
                    }
                }
                console.log(mapProps, '桃園市');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            case "新竹市":
                mapProps = {
                    zoom: 13,
                    position: {
                        lat: 24.7835529,
                        lng: 120.9316642
                    }
                }
                console.log(mapProps, '新竹市');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            case "新竹縣":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 24.6871974,
                        lng: 121.0321216
                    }
                }
                console.log(mapProps, '新竹縣');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            case "苗栗縣":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 24.5150534,
                        lng: 120.8016455
                    }
                }
                console.log(mapProps, '苗栗縣');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            case "台中市":
                mapProps = {
                    zoom: 10,
                    position: {
                        lat: 24.2204731,
                        lng: 120.6756884
                    }
                }
                console.log(mapProps, '台中市');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            case "彰化縣":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 23.992187,
                        lng: 120.3230686
                    }
                }
                console.log(mapProps, '彰化縣');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            case "南投縣":
                mapProps = {
                    zoom: 10,
                    position: {
                        lat: 23.8412218,
                        lng: 120.7023323
                    }
                }
                console.log(mapProps, '南投縣');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            case "雲林縣":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 23.6745746,
                        lng: 120.2945076
                    }
                }
                console.log(mapProps, '雲林縣');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            case "嘉義市":
                mapProps = {
                    zoom: 13,
                    position: {
                        lat: 23.4790323,
                        lng: 120.414277
                    }
                }
                console.log(mapProps, '嘉義市');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            case "嘉義縣":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 23.425616,
                        lng: 120.397461
                    }
                }
                console.log(mapProps, '嘉義縣');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            case "台南市":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 23.1229948,
                        lng: 120.1312999
                    }
                }
                console.log(mapProps, '台南市');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            case "高雄市":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 22.6101871,
                        lng: 120.3666787
                    }
                }
                console.log(mapProps, '高雄市');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            case "屏東縣":
                mapProps = {
                    zoom: 10,
                    position: {
                        lat: 22.3913338,
                        lng: 120.3482342
                    }
                }
                console.log(mapProps, '屏東縣');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            case "台東縣":
                mapProps = {
                    zoom: 9,
                    position: {
                        lat: 22.7221328,
                        lng: 120.6097015
                    }
                }
                console.log(mapProps, '台東縣');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            case "花蓮縣":
                mapProps = {
                    zoom: 9,
                    position: {
                        lat: 23.7344267,
                        lng: 120.8196701
                    }
                }
                console.log(mapProps, '花蓮縣');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            case "宜蘭縣":
                mapProps = {
                    zoom: 9,
                    position: {
                        lat: 25.0374821,
                        lng: 121.8489693
                    }
                }
                console.log(mapProps, '宜蘭縣');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            case "澎湖縣":
                mapProps = {
                    zoom: 10,
                    position: {
                        lat: 23.4815521,
                        lng: 119.2404985
                    }
                }
                console.log(mapProps, '澎湖縣');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            case "金門縣":
                mapProps = {
                    zoom: 12,
                    position: {
                        lat: 24.4607121,
                        lng: 118.3559365
                    }
                }
                console.log(mapProps, '金門縣');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            case "連江縣":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 26.1627691,
                        lng: 120.0701337
                    }
                }
                console.log(mapProps, '連江縣');
                props.setMapProps(mapProps);
                return (setUpdatePosition({ lat: mapProps.position.lat, lng: mapProps.position.lng }))
            default:
                return console.log('default')
        };
    }
    const UpdateHandler = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }

    return (
        <div style={{ float: 'left', margin: "20px" }} >
            <Form noValidate validated={validated} onSubmit={UpdateHandler}>
                <InputGroup.Prepend style={{ marginBottom: "10px" }} >
                    <Button variant="outline-primary" onClick={showCalendar}>確診日期</Button>
                </InputGroup.Prepend>
                {isCalendar && (<Calendar style={{ marginBottom: "10px" }} value={updateDate} onClickDay={date => dateSelect(date)}></Calendar>)}

                <Form.Group controlId="exampleForm.Date" style={{ marginBottom: "10px" }} placeholder={formatDate(updateDate)}>
                    <Form.Control required as="textarea" defaultValue={formatDate(updateDate)} onChange={e => { setUpdateContent(e) }} />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid date(yyyy-mm-dd).
          </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>請選擇確診地區</Form.Label>
                    <Form.Control required as="select" onChange={e => placeSelect(e)} >
                        <option>基隆市</option>
                        <option>台北市</option>
                        <option>新北市</option>
                        <option>桃園市</option>
                        <option>新竹市</option>
                        <option>新竹縣</option>
                        <option>苗栗縣</option>
                        <option>台中市</option>
                        <option>彰化縣</option>
                        <option>南投縣</option>
                        <option>雲林縣</option>
                        <option>嘉義市</option>
                        <option>嘉義縣</option>
                        <option>台南市</option>
                        <option>高雄市</option>
                        <option>屏東縣</option>
                        <option>台東縣</option>
                        <option>花蓮縣</option>
                        <option>宜蘭縣</option>
                        <option>澎湖縣</option>
                        <option>金門縣</option>
                        <option>連江縣</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>確診詳細內容</Form.Label>
                    <Form.Control required as="textarea" rows="3" placeholder="ex:中部社區感染" onChange={value => { setUpdateContent(value) }} />
                    <Form.Control.Feedback type="invalid">
                        請輸入案例詳細內容
          </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea2">
                    <Form.Label>備註</Form.Label>
                    <Form.Control as="textarea" rows="2" placeholder="ex:已痊癒" onChange={value => { setUpdateNote(value) }} />
                </Form.Group>
                <InputGroup.Append>
                    <Button style={{ marginBottom: "10px" }} variant="outline-primary" type="submit">增加病例</Button>
                </InputGroup.Append>
            </Form>
        </div>

    )


}
const mapStateToProps = state => {
    return {
        zoom: state.mapPropsReducer.zoom,
        position: state.mapPropsReducer.position
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setMapProps: (mapProps) => dispatch(actions.setMapProps(mapProps))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CaseUpdater);


