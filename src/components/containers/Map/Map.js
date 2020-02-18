import React, { useState, Fragment, useEffect } from 'react'
import { GoogleMap, LoadScript, MarkerClusterer, Marker, InfoWindow } from '@react-google-maps/api'
import Aux from '../../hoc/auxiliary'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spinner'
import styled from './Map.module.css'



const info = '2/9-從武漢感染搭機回台(已隔離)'

// const caseInfos = [
//     { id: 0,places:"高雄市",date:, position: { lat: 22.616, lng: 120.301 }, content: '(46歲男)香港轉機確診' ,note:"已痊癒"},
//     { id: 'case1(2/6)', position: { lat: 23.617, lng: 120.300 }, content: '(50歲女)香港轉機確診' }
// ];

const options = {
    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
};


function Map(props) {

    const [mapRef, setMapRef] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [markerMap, setMarkerMap] = useState({});
    const [center, setCenter] = useState({ lat: 23.600, lng: 120.832 });
    const [zoom, setZoom] = useState(5);
    const [clickedLatLng, setClickedLatLng] = useState(null);
    const [infoOpen, setInfoOpen] = useState(false);
    const [init, setInit] = useState(false);

    useEffect(() => {
        console.log('Fetch marker');
        props.onFetchMarkers();
    }, []);

    const loadHandler = map => {
        // Store a reference to the google map instance in state
        setMapRef(map);

        console.log('load');
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

    const markerClickHandler = (event, info) => {
        const mapInfo = { ...mapRef };
        console.log(mapInfo);
        setZoom(mapInfo.zoom);
        // Remember which info was clicked
        setSelectedPlace(info);

        // Required so clicking a 2nd marker works as expected
        if (infoOpen) {
            setInfoOpen(false);
        }

        setInfoOpen(true);

        console.log(zoom);
        // If you want to zoom in a little on marker click
        if (mapInfo.zoom < 13) {
            setZoom(13);
        }

        // if you want to center the selected Marker
        setCenter(info.position);

    };

    let map = <Spinner />;


    if (props.marker !== []) {
        const markers = props.markers;
        map = markers.map(info => (
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
                    onLoad={loadHandler}
                    id="marker-example"
                    mapContainerStyle={mapContainerStyle}
                    zoom={zoom}
                    center={center}
                >
                    {map}
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
        markers: state.markersInfo,
        loading: state.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchMarkers: () => dispatch(actions.fetchMarker())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Map);