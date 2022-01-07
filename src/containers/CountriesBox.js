import React, {useEffect, useState} from 'react';
import CountryDetails from '../components/CountryDetails';
import CountryList from '../components/CountryList';
import FavouriteCountries from '../components/FavouriteCountries';

const CountriesBox = () => {
    
    const [countries, setCountries] = useState([]);
    const [populationTotal, setTotal] = useState(0);
    const [country, setCountry] = useState(null);
    const [favouriteCountries, setFavouriteCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(countries => setCountries(countries))
    }

    const onCountryClick = (country) => {
        setCountry(country)
    }

    const amendFavouriteCountry = (country) => {
        const countryInFavourites = favouriteCountries.includes(country);
        return countryInFavourites ? null : setFavouriteCountries([...favouriteCountries, country])
    }

    const totalPopulation = countries.reduce((total, country) => {
            return(
                total + country.population
            );
        }, 0);

    return (
        <div className="main-container">
            <p>Total Population: {totalPopulation}</p>
            <CountryList countries={countries} onCountryClick={onCountryClick} amendFavouriteCountry={amendFavouriteCountry}/>
            <div>
            {country ? <CountryDetails country={country} countries={countries}/> : null}
            </div>
            <div>
            <h3>Favourite Countries:</h3>
            {favouriteCountries ? <FavouriteCountries favouriteCountries={favouriteCountries}/> : null}
            </div>
        </div>
    )
}

export default CountriesBox;