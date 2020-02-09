import React from 'react';
import { InfoWindow } from '@react-google-maps/api';

const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15
}

const InfoMessage = (props) => {
    return (
        <InfoWindow
            position={props.location}
        >
            <div style={divStyle}>
                <h1>{props.info}</h1>
            </div>
        </InfoWindow>
    );


}

export default InfoMessage;