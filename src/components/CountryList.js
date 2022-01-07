import CountryItem from "./CountryItem";

const CountryList = ({countries, onCountryClick, amendFavouriteCountry}) => {

    const handleClick = (event) => {
        const favouriteCountry = countries[event.target.value];
        amendFavouriteCountry(favouriteCountry);
    }

    const countryList = countries.map((country, index) => {

        return (
            <>
            <CountryItem country={country} key={index} onCountryClick={onCountryClick}/>
            <button value={index} onClick={handleClick}>⭐️</button>
            </>
        );
    })

    return (
        <div>
            <ul>
                {countryList}
            </ul>
        </div>
    );
}

export default CountryList;