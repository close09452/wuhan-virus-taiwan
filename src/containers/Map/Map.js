import React, { useState, useEffect } from 'react'
import { GoogleMap, LoadScript, Circle, Marker, InfoWindow } from '@react-google-maps/api'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import Spinner from '../../components/Spinner/Spinner'
import styled from './Map.module.css'


// const options = {
//     imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
// };
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
        console.log('Fetch marker');
        props.onFetchMarkers();
    }, []);

    const loadHandler = map => {
        // Store a reference to the google map instance in state
        // const bounds = new window.google.maps.LatLngBounds();
        // map.fitBounds(bounds);
        setMapRef(map);
        console.log('load map');
    }

    const mapContainerStyle = {
        height: "100vh",
        width: "65vw"
    };

    // We have to create a mapping of our infos to actual Marker objects
    const markerLoadHandler = (marker, info) => {
        return setMarkerMap(prevState => {
            return { ...prevState, [info.id]: marker };
        });
    };
    const mapZoomHandler = () => {
        if (props.marker !== []) {
            const mapInfo = { ...mapRef };
            console.log(mapInfo.zoom);
            setZoom(mapInfo.zoom);
        }
    }

    const markerClickHandler = (event, info) => {
        const mapInfo = { ...mapRef };
        let mapProps = {}
        // Remember which info was clicked
        setSelectedPlace(info);
        // Required so clicking a 2nd marker works as expected
        if (infoOpen) {
            setInfoOpen(false);
        }

        setInfoOpen(true);
        if (mapInfo.zoom < 13) {
            console.log('zoom in');
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

    let mark = <Spinner />;

    if (props.marker !== []) {
        const markers = props.markers;
        mark = markers.map(info => (
            <Marker
                key={info.id}
                onLoad={marker => markerLoadHandler(marker, info)}
                position={info.position}
                onClick={marker => markerClickHandler(marker, info)}
            />
        ))
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
                    mapContainerStyle={mapContainerStyle}
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
                                </div>
                            </InfoWindow>
                        )
                    }
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