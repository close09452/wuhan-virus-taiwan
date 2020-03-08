import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import DateForm from '../../components/UI/form/dateForm/dateForm'
import PlaceSelect from '../../components/UI/form/placeSelecter/placeSelecter'
import PositionForm from '../../components/UI/form/positionForm/positionForm'
import InputForm from '../../components/UI/form/inputForm/InputForm'
import styled from './CaseUpdater.module.css'

const citys = [
    "請選擇確診地區", "基隆市", "台北市",
    "新北市", "桃園市", "新竹市", "新竹縣",
    "苗栗縣", "台中市", "彰化縣", "南投縣",
    "雲林縣", "嘉義市", "嘉義縣", "台南市",
    "高雄市", "屏東縣", "台東縣", "花蓮縣",
    "宜蘭縣", "澎湖縣", "金門縣", "連江縣"
];


const CaseUpdater = (props) => {

    const [useCalendar, setCalendar] = useState(false);
    const [updateDate, setUpdateDate] = useState(new Date());
    const [updatePlace, setUpdatePlace] = useState('基隆市');
    const [updataContent, setUpdateContent] = useState('');
    const [updateNote, setUpdateNote] = useState('');
    const [validated, setValidated] = useState(false);

    const positionInputForm = [
        {
            label: "經度",
            id: "updateForm.lat",
            readOnly: true,
            value: props.clickedPosition.lat
        },
        {
            label: "緯度",
            id: "updateForm.lng",
            readOnly: true,
            value: props.clickedPosition.lng
        }
    ]
    const calendarSetter = () => {
        setCalendar(!useCalendar);
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
    const placeChangeHandler = (event) => {
        setUpdatePlace(event.target.value);
        let mapProps = {};
        switch (event.target.value) {
            case "請選擇確診地區":
                mapProps = {
                    zoom: 8,
                    position: {
                        lat: 23.6147681,
                        lng: 120.8348167
                    },
                    clickedPosition: {
                        lat: 0,
                        lng: 0
                    }
                }
                break;
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
                        lat: 25.0288067,
                        lng: 121.486402
                    }
                }
                break;
            case "新北市":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 24.9875278,
                        lng: 121.4646036
                    },
                    clickedPosition: {
                        lat: 24.9875278,
                        lng: 121.4646036
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
                        lat: 25.0201456,
                        lng: 121.30047
                    }
                }
                break;
            case "新竹市":
                mapProps = {
                    zoom: 11,
                    position: {
                        lat: 24.7835529,
                        lng: 120.9316642
                    },
                    clickedPosition: {
                        lat: 24.7835529,
                        lng: 120.9316642
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
                        lat: 24.6871974,
                        lng: 121.0321216
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
                        lat: 24.5150534,
                        lng: 120.8016455
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
                        lat: 24.2204731,
                        lng: 120.6756884
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
                        lat: 23.992187,
                        lng: 120.3230686
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
                        lat: 23.8412218,
                        lng: 120.7023323
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
                        lat: 23.6745746,
                        lng: 120.2945076
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
                        lat: 23.4790323,
                        lng: 120.414277
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
                        lat: 23.425616,
                        lng: 120.397461
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
                        lat: 23.1229948,
                        lng: 120.1312999
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
                        lat: 22.6101871,
                        lng: 120.3666787
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
                        lat: 22.3913338,
                        lng: 120.3482342
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
                        lat: 22.7221328,
                        lng: 120.6097015
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
                        lat: 23.7344267,
                        lng: 120.8196701
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
                        lat: 25.0374821,
                        lng: 121.8489693
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
                        lat: 23.4815521,
                        lng: 119.2404985
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
                        lat: 24.4607121,
                        lng: 118.3559365
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
                        lat: 26.1627691,
                        lng: 120.0701337
                    }
                }
                break;
            default:
                return console.log('default')
        };

        return props.setMapProps(mapProps);
    }

    const contentSetter = (event) => {
        setUpdateContent(event.target.value);
    }

    const noteSetter = (event) => {
        setUpdateNote(event.target.value);
    }

    const UpdateChangeHandler = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        else {
            const forElementsArray = {
                date: formatDate(updateDate),
                position: {
                    lat: props.clickedPosition.lat,
                    lng: props.clickedPosition.lng
                },
                place: updatePlace,
                content: updataContent,
                note: updateNote,
                case: props.markers.length + 1
            };
            props.updateMarkerInfo(forElementsArray);
        }

        setValidated(true);
    }
    return (
        <div className={styled.Form} >
            <Form noValidate validated={validated} onSubmit={UpdateChangeHandler}>
                <DateForm
                    clicked={calendarSetter}
                    showCalendar={useCalendar}
                    defaultDate={updateDate}
                    dateClickd={date => dateSelect(date)}
                    dateText={formatDate(updateDate)}
                />
                <PlaceSelect
                    options={citys}
                    changed={e => placeChangeHandler(e)}
                />
                <PositionForm
                    formElements={positionInputForm}
                    warningText="點選地圖調整經緯度"
                />
                <InputForm
                    id="updateForm.Content"
                    labelText="確診詳細內容 (*必填)"
                    rows="3"
                    required
                    type={"textarea"}
                    placeholder="ex:(台中61歲)白牌計程車司機，無出國史"
                    maxLength='80'
                    changed={e => { contentSetter(e) }}
                    invalidText="請輸入案例詳細內容"
                />
                <InputForm
                    id="updateForm.Note"
                    labelText="備註"
                    rows="2"
                    required={false}
                    type={"textarea"}
                    placeholder="ex:已痊癒"
                    maxLength='30'
                    changed={e => { noteSetter(e) }}
                />
                <Button
                    style={{ marginBottom: "10px" }}
                    variant="primary"
                    type="submit"
                >送出病歷</Button>
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


