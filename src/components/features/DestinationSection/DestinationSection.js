import React from 'react';
import './DestinationSection.css';
import DestinationCard from '../DestinationCard/DestinationCard';
import FanjingshanChina from './images/FanjingshanChina.svg';
import VeveySwitzerland from './images/VeveySwitzerland.svg';
import SkadarMontenegro from './images/SkadarMontenegro.svg';
import OrangeArrow from './images/orange_v.svg';

const DestinationSection = () => {
    return (
        <section className="destinationsSection">
            <div className="destinationsTitle">
                <h1>Featured destinations</h1>
                <a href="/some-path">View all <img src={OrangeArrow} alt="arrow" /></a>
            </div>
            <div className="elements">
                <DestinationCard />
                <div className="element">
                    <img src={FanjingshanChina} alt="FanjingshanChina" />
                    <div className="elementText">
                        <h4>Fanjingshan</h4>
                        <p>China</p>
                    </div>
                </div>
                <div className="element">
                    <img src={VeveySwitzerland} alt="VeveySwitzerland" />
                    <div className="elementText">
                        <h4>Vevey</h4>
                        <p>Switzerland</p>
                    </div>
                </div>
                <div className="element">
                    <img src={SkadarMontenegro} alt="SkadarMontenegro" />
                    <div className="elementText">
                        <h4>Skadar</h4>
                        <p>Montenegro</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DestinationSection;
