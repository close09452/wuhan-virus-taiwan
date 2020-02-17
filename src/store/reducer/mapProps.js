import * as actionTypes from '../actions/actionTypes'

const initalState = {
    zoom: 8,
    position: {
        lat: 23.6147681,
        lng: 120.8348167
    }
}

const initMapProps = (state, action) => {
    return {
        ...state,
        initalState
    }
}
const setMapProps = (state, action) => {
    console.log(state, action);
    return {
        ...state,
        zoom: action.mapProps.zoom,
        position: {
            lat: action.mapProps.position.lat,
            lng: action.mapProps.position.lng
        }

    }
}


const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.MAPPROPS_INIT:
            return initMapProps(state, action);
        case actionTypes.MAPPROPS_SET:
            return setMapProps(state, action);
        default:
            return state;
    }
}

export default reducer;