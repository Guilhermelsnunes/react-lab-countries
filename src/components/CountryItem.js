const CountryItem = ({country, index, onCountryClick}) => {

    const handleClick = () => {
        onCountryClick(country);
    }

    return (
        <li onClick={handleClick}>{country.name.common} {country.flag}</li>
    )
}

export default CountryItem;