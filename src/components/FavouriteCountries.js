import CountryItem from "./CountryItem";

const FavouriteCountries = ({favouriteCountries}) => {

    const countryList = favouriteCountries.map((country, index) => {

        return (
            <>
            <CountryItem country={country} key={index}/>
            </>
        )
    })

    return(
        <ul>
            {countryList}
        </ul>
    );

}

export default FavouriteCountries;