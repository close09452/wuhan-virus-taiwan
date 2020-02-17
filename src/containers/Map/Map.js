import React, { useState, Fragment, useEffect, useContext } from 'react'
import { GoogleMap, LoadScript, useGoogleMap, Marker, InfoWindow } from '@react-google-maps/api'
import Aux from '../../hoc/auxiliary'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import Spinner from '../../components/Spinner/Spinner'
import styled from './Map.module.css'


const options = {
    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
};

function Map(props) {

    const [mapRef, setMapRef] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [markerMap, setMarkerMap] = useState({});
    const [clickedLatLng, setClickedLatLng] = useState(null);
    const [infoOpen, setInfoOpen] = useState(false);
    const [useZoom, setZoom] = useState(6)

    useEffect(() => {
        console.log('Fetch marker');
        props.onFetchMarkers();
    }, []);

    const loadHandler = map => {
        // Store a reference to the google map instance in state


        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMapRef(map);
        console.log('load map');
    }


    const mapContainerStyle = {
        height: "100vh",
        width: "70vw"
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
            const mapProps = {
                zoom: mapInfo.zoom
            }
            //setZoom(mapInfo.zoom)
            console.log(mapProps);
        }
    }

    const markerClickHandler = (event, info) => {
        const mapInfo = { ...mapRef };
        console.log(mapInfo);
        // Remember which info was clicked
        setSelectedPlace(info);
        // Required so clicking a 2nd marker works as expected
        if (infoOpen) {
            setInfoOpen(false);
        }

        setInfoOpen(true);
        let mapProps = {
            zoom: 13,
            position: info.position
        }
        if (mapInfo.zoom < 13) {
            console.log('zoom in');
            props.setMapProps(mapProps);
        }
    };


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
                    mapContainerStyle={mapContainerStyle}
                    center={{ lat: props.position.lat, lng: props.position.lng }}
                    zoom={useZoom}
                    onZoomChanged={mapZoomHandler}

                >
                    {console.log(props.zoom, props.position)}
                    {console.log(mapRef)}
                    {mark}
                    {
                        infoOpen && (
                            <InfoWindow
                                anchor={markerMap[selectedPlace.id]}
                                onCloseClick={() => setInfoOpen(false)}
                            >
                                <div>
                                    <h3>{selectedPlace.id}</h3>
                                    <div>{selectedPlace.content}</div>
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
        position: state.mapPropsReducer.position
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchMarkers: () => dispatch(actions.fetchMarker()),
        setMapProps: (mapProps) => dispatch(actions.setMapProps(mapProps))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Map);