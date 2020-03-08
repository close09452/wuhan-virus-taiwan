import React, { useState, useEffect } from 'react'
import { GoogleMap, MarkerClusterer, LoadScript, Circle, Marker, InfoWindow } from '@react-google-maps/api'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import * as actions from '../../store/actions/index'
import Spinner from '../../components/spinner/spinner'
import styled from './Map.module.css'

const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 1000,
    zIndex: 1
}

function Map(props) {

    const [mapRef, setMapRef] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [markerMap, setMarkerMap] = useState({});
    const [infoOpen, setInfoOpen] = useState(false);
    const [useZoom, setZoom] = useState(false);


    useEffect(() => {
        props.onFetchMarkers();
    }, []);


    let mark = <Spinner />;

    if (props.marker !== []) {
        const markers = props.markers;
        mark =
            <MarkerClusterer
                options={options}
            >
                {
                    (clusterer) => markers.map(info => (
                        <Marker
                            key={info.id}
                            onLoad={marker => markerLoadHandler(marker, info)}
                            position={info.position}
                            onClick={marker => markerClickHandler(marker, info)}
                            clusterer={clusterer}
                        />
                    ))
                }
            </MarkerClusterer>
    }

    const loadHandler = map => {
        setMapRef(map);
    }

    const MaxMapContainerStyle = {
        height: "100vh",
        width: "100vw"
    };
    const MinMapContainerStyle = {
        height: "100vh",
        width: "65vw"
    };

    const markerLoadHandler = (marker, info) => {
        return setMarkerMap(prevState => {
            return { ...prevState, [info.id]: marker };
        });
    };
    const mapZoomHandler = () => {
        if (props.marker !== []) {
            const mapInfo = { ...mapRef };
            setZoom(mapInfo.zoom);
        }
    }
    const markerClickHandler = (event, info) => {
        const mapInfo = { ...mapRef };
        let mapProps = {}
        setSelectedPlace(info);

        if (infoOpen) {
            setInfoOpen(false);
        }

        setInfoOpen(true);
        if (mapInfo.zoom < 13) {
            mapProps = {
                zoom: 13,
                position: {
                    lat: info.position.lat,
                    lng: info.position.lng
                },
                clickedPosition: {
                    lat: props.position.lat,
                    lng: props.position.lng
                }
            }
        }
        else {
            mapProps = {
                zoom: useZoom,
                position: {
                    lat: info.position.lat,
                    lng: info.position.lng
                },
                clickedPosition: {
                    lat: props.position.lat,
                    lng: props.position.lng
                }
            }
        }
        props.setMapProps(mapProps);
    };
    const mapClickHandler = (latLng) => {
        const mapProps = {
            zoom: props.zoom,
            position: {
                lat: props.position.lat,
                lng: props.position.lng
            },
            clickedPosition: {
                lat: latLng.lat,
                lng: latLng.lng
            }
        }
        props.setMapProps(mapProps);
    }



    return (
        <div className={styled.map}>
            <LoadScript
                id="script-loader"
                googleMapsApiKey="AIzaSyDxsc0P3yUrLchOaaxLWrgK8YyR78zsED0">
                <GoogleMap
                    id="marker-wuhan-coronavirus"
                    onLoad={loadHandler}
                    onClick={e => mapClickHandler(e.latLng.toJSON())}
                    mapContainerStyle={window.innerWidth < 1200 ? MaxMapContainerStyle : MinMapContainerStyle}
                    center={{ lat: props.position.lat, lng: props.position.lng }}
                    zoom={props.zoom}
                    onZoomChanged={mapZoomHandler}
                >
                    <Circle
                        center={{ lat: props.clickedPosition.lat, lng: props.clickedPosition.lng }}
                        options={options}
                    />
                    {mark}
                    {
                        infoOpen && (
                            <InfoWindow
                                anchor={markerMap[selectedPlace.id]}
                                onCloseClick={() => setInfoOpen(false)}
                            >
                                <div>
                                    <p>{selectedPlace.content}</p>
                                    <div>備註:{selectedPlace.note}</div>
                                    <div>案例:第{selectedPlace.case}例</div>
                                </div>
                            </InfoWindow>
                        )
                    }
                    <Button className={styled.Button} variant="danger" onClick={props.showBackdrop}> 新增病例</Button>
                </GoogleMap>
            </LoadScript>
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
        onFetchMarkers: () => dispatch(actions.fetchMarker()),
        setMapProps: (mapProps) => dispatch(actions.setMapProps(mapProps))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Map);