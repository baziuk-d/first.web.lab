import React from 'react';
import RajaAmpatIndonesia from '../DestinationSection/images/RajaAmpatIndonesia.svg';


const DestinationCard = () => {
    return (
        <div className="element">
            <img src={RajaAmpatIndonesia} alt="RajaAmpatIndonesia" />
            <div className="elementText">
                <h4>Raja Ampat</h4>
                <p>Indonesia</p>
            </div>
        </div>
    );
};

export default DestinationCard;
