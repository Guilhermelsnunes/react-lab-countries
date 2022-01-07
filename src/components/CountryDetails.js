import React from "react";

const CountryDetails = ({country, countries}) => {


    const borderList = country.map((country, index) => {
        return borderList ? null : country.borders
    })
    
    // const countryList = countries.filter(())

    return(
        <>
        <h3>Country: {country.name.common}</h3>
        <h5>Population: {country.population}</h5>
        <p>Flag: {country.flag}</p>
        <p>Continent: {country.region}</p>
        <p>Neighbouring Countries: {borderList}</p>
        </>
    );
}

export default CountryDetails;