import { useState } from "react";

const ShowCountry = ({countryProps, handleVisit}) => {
    const {name,flags} = countryProps;

    //handle visit
    const [visited,setVisited] = useState(false)
    function toggleVisit(){
        setVisited(!visited);
        handleVisit(countryProps);
    }

    return (
        
            <div className="child-container">
                <h5>Country Name: {name.common}</h5> 
                <img src={flags.png} alt="" /><br />
                <button onClick={toggleVisit}>{visited ? 'Already Visited' : 'Visit'}</button>
            </div>
       
    );
};

export default ShowCountry;


