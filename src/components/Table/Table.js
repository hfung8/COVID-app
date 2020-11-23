import React from "react";

const Table = ( confirmedCountries )  => {

    console.log(confirmedCountries.places);
    var places;
    if (confirmedCountries.places !== null){
        places = JSON.parse(confirmedCountries.places);
        return places.map((country, index) => <li key={index}>{country.countryRegion}</li>); 
    }
    
return (
    <div>
        <h1>
           <ul>
               {places}
           </ul>
        </h1>
    </div>
)
}


export default Table;