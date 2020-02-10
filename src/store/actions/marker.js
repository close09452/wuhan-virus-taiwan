import * as actionTypes from './actionTypes';
import axios from '../../axios-markers'

export const fetchMarkerInit = () => {
    return {
        type: actionTypes.FETCH_MARKERSINFO_INIT
    }
}

export const fetchMarkerSuccess = (markers) => {
    return {
        type: actionTypes.FETCH_MARKERSINFO_SUCCESS,
        markers: markers
    }
}

export const fetchMarkerFail = (error) => {
    return {
        type: actionTypes.FETCH_MARKERSINFO_FAIL,
        error: error
    }
}

export const fetchMarkerStart = () => {
    return {
        type: actionTypes.FETCH_MARKERSINFO_START
    }
}

export const fetchMarker = () => {
    return dispatch => {
        dispatch(fetchMarkerStart());
        axios.get('/markersInfo.json')
            .then(res => {
                const fetchMarkers = [];
                for (let key in res.data) {
                    fetchMarkers.push({
                        ...res.data[key],
                        id: key
                    });
                }
                console.log(res.data);
                dispatch(fetchMarkerSuccess(fetchMarkers));
            })
            .catch(err => {
                dispatch(fetchMarkerFail(err));
            });
    };
}