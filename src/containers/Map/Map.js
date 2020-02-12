import React, { useState, Fragment, useEffect } from 'react'
import { GoogleMap, LoadScript, MarkerClusterer, Marker, InfoWindow } from '@react-google-maps/api'
import InfoMessage from './InfoMessage';
import Aux from '../../hoc/auxiliary'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spinner'



const info = '2/9-從武漢感染搭機回台(已隔離)'

// const caseInfos = [
//     { id: 'case0(2/6)', position: { lat: 22.616, lng: 120.301 }, content: '(46歲男)香港轉機確診' },
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
    const [caseInfos, setCaseInfos] = useState({});

    useEffect(() => {
        props.onFetchMarkers();
    }, []);


    const mapContainerStyle = {
        height: "800px",
        width: "1200px"
    };

    // We have to create a mapping of our places to actual Marker objects
    const markerLoadHandler = (marker, place) => {
        return setMarkerMap(prevState => {
            return { ...prevState, [place.id]: marker };
        });
    };

    const markerClickHandler = (event, place) => {
        // Remember which place was clicked
        setSelectedPlace(place);

        // Required so clicking a 2nd marker works as expected
        if (infoOpen) {
            setInfoOpen(false);
        }

        setInfoOpen(true);

        // If you want to zoom in a little on marker click
        if (zoom < 13) {
            setZoom(13);
        }

        // if you want to center the selected Marker
        setCenter(place.position)
    };
    console.log(props);
    let map = <Spinner />;
    if (!props.loading) {
        setCaseInfos(props.markers);
    }
    return (
        // <LoadScript>
        //     <GoogleMap
        //         id="marker-example"
        //         googleMapsApiKey="AIzaSyDxsc0P3yUrLchOaaxLWrgK8YyR78zsED0"
        //         mapContainerStyle={mapContainerStyle}
        //         zoom={zoom}
        //         center={center}
        //     >

        //         {
        //             caseInfos.map(info => (
        //                 <Marker
        //                     key={info.id}
        //                     onLoad={marker => markerLoadHandler(marker, info)}
        //                     position={info.position}
        //                     onClick={marker => markerClickHandler(marker, info)}
        //                 />
        //             ))
        //         }
        //         {
        //             infoOpen && (
        //                 <InfoWindow
        //                     anchor={markerMap[selectedPlace.id]}
        //                     onCloseClick={() => setInfoOpen(false)}
        //                 >
        //                     <div>
        //                         <h3>{selectedPlace.id}</h3>
        //                         <div>{selectedPlace.content}</div>
        //                     </div>
        //                 </InfoWindow>
        //             )}
        //     </GoogleMap>
        // </LoadScript>

        <div>
            {map}
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