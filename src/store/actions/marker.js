import * as actionTypes from './actionTypes';
import axios from '../../axios-markers'

export const fetchMarkerInit = () => {
    return {
        type: actionTypes.FETCH_MARKERSINFO_INIT
    }
}

export const fetchMarkerSuccess = (markersInfo) => {
    return {
        type: actionTypes.FETCH_MARKERSINFO_SUCCESS,
        markersInfo: markersInfo
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

export const updateMarkerInfo_success = (id, updateData) => {
    return {
        type: actionTypes.UPDATE_MARKERSINFO_SUCCESS,
        id: id,
        updateDate: updateData
    }
}

export const updateMarkerInfo_fail = (error) => {
    return {
        type: actionTypes.UPDATE_MARKERSINFO_FAIL,
        error: error
    }
}

export const updateMarkerInfo_Start = () => {
    return {
        type: actionTypes.UPDATE_MARKERSINFO_START
    }
}

export const updateMarkerInfo = (updateData) => {
    return dispatch => {
        console.log(updateData);
        dispatch(updateMarkerInfo_Start);
        axios.post('/markersInfo.json', updateData)
            .then(res => {
                dispatch(updateMarkerInfo_success(updateData.content, updateData));
            })
            .catch(error => {
                dispatch(updateMarkerInfo_fail(error));
            })
    };
};