import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {

    const [countries, setCountries] = useState([])
    const [countriesVisited, setCountriesVisited] = useState([])

    const handleCountriesVisited = (country) =>{
        const newVisitedCountries = [...countriesVisited, country]
        setCountriesVisited(newVisitedCountries)
       
    }

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <h4>Visited Countries: {countriesVisited.length}</h4>
            <ul>
            {
                  
              countriesVisited.map(country => 
              <li 
                 key={country.cca3}>{country.name.common}
              </li>)

            }
            </ul>
            <div className="countries-container">
                {
                countries.map(country => 
                <Country 
                key={country.cca3}
                handleCountriesVisited = {handleCountriesVisited}
                 country={country}
                 ></Country>)
                }

            </div>
        </div>
    );
};

export default Countries;