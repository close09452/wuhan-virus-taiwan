import * as actionTypes from './actionTypes';

export const initMapProps = () => {
    return {
        type: actionTypes.MAPPROPS_INIT
    }
}
export const setMapProps = (mapProps) => {
    return {
        type: actionTypes.MAPPROPS_SET,
        mapProps: mapProps
    }
}

