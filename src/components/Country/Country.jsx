import { useState } from 'react';
import './Country.css'

const Country = ({country, handleCountriesVisited, handleAddFlag}) => {
    console.log(country)
    const {name, flags, population, area, cca3} = country
    
    
    
    const [Visited, setVisited] = useState(false)
    
    const handleVisited =()=>{
        setVisited(!Visited)
    }
    



    return (
        <div className={`countryBox ${Visited && 'visited'}`}>
            <h3 style={{color: Visited ? 'purple': 'white'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=>handleAddFlag(country.flags.png)}>Add Flag</button>
            <button onClick={()=>handleCountriesVisited(country)}>Mark Visited</button> <br /> <br />
            <button onClick={handleVisited}>{Visited ? 'Visited': 'Going'}</button>
            {Visited ? "I'm visited this country." : "I want to visit"}
        </div>
    );
};

export default Country;