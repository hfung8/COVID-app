import React, { useMemo } from "react";
import handlePlaces from "../../Data/Data";


const Table = () => {
const data = useMemo(() => handlePlaces(20), [])
return data; 
}


export default Table;