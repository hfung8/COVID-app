import React from "react";


const Table = ( confirmedCountries )  => {

    console.log(confirmedCountries);
    const places = confirmedCountries.handlePlaces;
    console.log(places);
    const p = places.map((country, index) => (<li key={index}>{country}</li>))
    console.log(p);
return (
    <div>
        <h1>
           <ul>
               HELLO
           </ul>
        </h1>
    </div>
)
}


export default Table;