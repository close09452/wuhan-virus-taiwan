import * as actionTypes from '../actions/actionTypes';

const initialState = {
    markersInfo: [],
    loading: false
}

const markerStart = (state, action) => {
    return {
        ...state,
        markersInfo: [],
        loading: true
    }
}
const markerSuccess = (state, action) => {
    return {
        ...state,
        markersInfo: action.markersInfo,
        loading: false
    }
}
const markerFail = (state, action) => {
    return {
        ...state,
        loading: true
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MARKERSINFO_START:
            return markerStart(state, action);
        case actionTypes.FETCH_MARKERSINFO_SUCCESS:
            return markerSuccess(state, action);
        case actionTypes.FETCH_MARKERSINFO_FAIL:
            return markerFail(state, action);
        default:
            return state;
    }
}


export default reducer;