import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    console.log(country)
    
    const {name, flags, population, area, cca3} = country

    const [Visited, setVisited] = useState(false)

    const handleVisited =()=>{
        setVisited(!Visited)
    }



    return (
        <div className='countryBox'>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited}>{Visited ? 'Visited': 'Going'}</button>
            {Visited ? "I'm visited this country." : "I want to visit"}
        </div>
    );
};

export default Country;