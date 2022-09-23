import React from 'react';
import "./Country.css";

const Country = (props) => {
    const { name: { common: name }, capital, region, population, flags: { png: flag } } = props.country;
    return (
        <div className='country'>
            <div>
                <h2>{name}</h2>
                <h2>City: {capital}</h2>
                <h3>Region: {region}</h3>
                <h4>Population: {population > 99999999 ? '100M+' : population}</h4>
            </div>
            <div>
                <img src={flag} alt="" />
            </div>
        </div>
    );
};

export default Country;