import React, { useState } from 'react'
import { InputGroup, Col, Button, Form } from 'react-bootstrap'
import Calendar from 'react-calendar'
import { connect } from 'react-redux'
import Hoc from '../../hoc/auxiliary'
import * as actions from '../../store/actions/index'

const CaseUpdater = (props) => {

    const [isCalendar, setCalendar] = useState(false);
    const [updateDate, setUpdateDate] = useState(new Date());
    const [updatePlace, setUpdatePlace] = useState('基隆市');
    const [updataContent, setUpdateContent] = useState('');
    const [updateNote, setUpdateNote] = useState('');
    const [updatePosition, setUpdatePosition] = useState({ lat: 23.6147681, lng: 120.8348167 });
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
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            case "台北市":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 25.0288067,
                        lng: 121.486402
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            case "新北市":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 24.9875278,
                        lng: 121.3646036
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            case "桃園市":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 25.0201456,
                        lng: 121.30047
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            case "新竹市":
                mapProps = {
                    zoom: 13,
                    position: {
                        lat: 24.7835529,
                        lng: 120.9316642
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            case "新竹縣":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 24.6871974,
                        lng: 121.0321216
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            case "苗栗縣":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 24.5150534,
                        lng: 120.8016455
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            case "台中市":
                mapProps = {
                    zoom: 10,
                    position: {
                        lat: 24.2204731,
                        lng: 120.6756884
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            case "彰化縣":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 23.992187,
                        lng: 120.3230686
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            case "南投縣":
                mapProps = {
                    zoom: 10,
                    position: {
                        lat: 23.8412218,
                        lng: 120.7023323
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            case "雲林縣":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 23.6745746,
                        lng: 120.2945076
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            case "嘉義市":
                mapProps = {
                    zoom: 13,
                    position: {
                        lat: 23.4790323,
                        lng: 120.414277
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            case "嘉義縣":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 23.425616,
                        lng: 120.397461
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            case "台南市":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 23.1229948,
                        lng: 120.1312999
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            case "高雄市":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 22.6101871,
                        lng: 120.3666787
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            case "屏東縣":
                mapProps = {
                    zoom: 10,
                    position: {
                        lat: 22.3913338,
                        lng: 120.3482342
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            case "台東縣":
                mapProps = {
                    zoom: 9,
                    position: {
                        lat: 22.7221328,
                        lng: 120.6097015
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            case "花蓮縣":
                mapProps = {
                    zoom: 9,
                    position: {
                        lat: 23.7344267,
                        lng: 120.8196701
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            case "宜蘭縣":
                mapProps = {
                    zoom: 9,
                    position: {
                        lat: 25.0374821,
                        lng: 121.8489693
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            case "澎湖縣":
                mapProps = {
                    zoom: 10,
                    position: {
                        lat: 23.4815521,
                        lng: 119.2404985
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            case "金門縣":
                mapProps = {
                    zoom: 12,
                    position: {
                        lat: 24.4607121,
                        lng: 118.3559365
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            case "連江縣":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 26.1627691,
                        lng: 120.0701337
                    },
                    clickedPosition: {
                        lat: 25.1193346,
                        lng: 121.6847455
                    }
                }
                break;
            default:
                return console.log('default')
        };

        console.log(mapProps, event.target.value);
        return props.setMapProps(mapProps);
    }
    const contentSetter = (event) => {
        setUpdateContent(event.target.value);
    }
    const noteSetter = (event) => {
        setUpdateNote(event.target.value);
    }
    const UpdateHandler = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        else {
            const forElementsArray = {
                date: formatDate(updateDate),
                position: {
                    lat: updatePosition.lat,
                    lng: updatePosition.lng
                },
                place: updatePlace,
                content: updataContent,
                note: updateNote
            };
            props.updateMarkerInfo(forElementsArray);
            setValidated(true);
        }
    }

    return (
        <div style={{ float: 'left', margin: "20px" }} >
            <Form noValidate validated={validated} onSubmit={UpdateHandler}>
                <InputGroup.Prepend style={{ marginBottom: "10px" }} >
                    <Button variant="outline-primary" onClick={showCalendar}>確診日期</Button>
                </InputGroup.Prepend>
                {isCalendar && (<Calendar style={{ marginBottom: "10px" }} value={updateDate} onClickDay={date => dateSelect(date)}></Calendar>)}

                <Form.Group readOnly controlId="updateForm.Date" style={{ marginBottom: "10px" }} placeholder={formatDate(updateDate)}>
                    <Form.Control required as="textarea" value={formatDate(updateDate)} />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid date(yyyy-mm-dd).
          </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="updateForm.Place">
                    <Form.Label>請選擇確診地區</Form.Label>
                    <Form.Control as="select" onChange={e => placeSelect(e)} >
                        <option>請選擇確診地區</option>
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
                <Form.Group controlId="updateForm.position">
                    <Form style={{ marginBottom: "10px" }}>
                        <Form.Row>
                            <Col>
                                <Form.Label>經度</Form.Label>
                                <Form.Control placeholder="點選地圖調整經度" readOnly value={props.clickedPosition.lat} />
                            </Col>
                            <Col>
                                <Form.Label>緯度</Form.Label>
                                <Form.Control placeholder="點選地圖調整緯度" readOnly value={props.clickedPosition.lat} />
                            </Col>
                        </Form.Row>
                    </Form>
                </Form.Group>

                <Form.Group controlId="updateForm.Content">
                    <Form.Label>確診詳細內容</Form.Label>
                    <Form.Control required as="textarea" rows="3" placeholder="ex:中部社區感染" maxLength='45' onChange={e => { contentSetter(e) }} />
                    <Form.Control.Feedback type="invalid">
                        請輸入案例詳細內容
          </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="updateForm.Note">
                    <Form.Label>備註</Form.Label>
                    <Form.Control as="textarea" rows="2" placeholder="ex:已痊癒" maxLength='27' onChange={e => { noteSetter(e) }} />
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
        markers: state.markerReducer.markersInfo,
        loading: state.markerReducer.loading,
        zoom: state.mapPropsReducer.zoom,
        position: state.mapPropsReducer.position,
        clickedPosition: state.mapPropsReducer.clickedPosition

    }
}
const mapDispatchToProps = dispatch => {
    return {
        setMapProps: (mapProps) => dispatch(actions.setMapProps(mapProps)),
        updateMarkerInfo: (markerInfo) => dispatch(actions.updateMarkerInfo(markerInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CaseUpdater);


