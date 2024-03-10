import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {

    const [countries, setCountries] = useState([])
    const [countriesVisited, setCountriesVisited] = useState([])
    const [countriesFlag, setCountriesFlag] = useState([])

    const handleCountriesVisited = (country) =>{
        const newVisitedCountries = [...countriesVisited, country]
        setCountriesVisited(newVisitedCountries)
       
    }
    const handleAddFlag =(flag)=>{
        const newCountriesFlag = [...countriesFlag, flag]
        setCountriesFlag(newCountriesFlag)
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
            <div className="countries-flag-container">
                {
                    countriesFlag.map((flag, index) => <img key={index} src={flag} alt="" />)
                }
            </div>
            <div className="countries-container">
                {
                countries.map(country => 
                <Country 
                key={country.cca3}
                handleCountriesVisited = {handleCountriesVisited}
                handleAddFlag ={handleAddFlag}
                 country={country}
                 ></Country>)
                }

            </div>
        </div>
    );
};

export default Countries;