import { useEffect } from "react";
import { useState } from "react";
import ShowCountry from "./ShowCountry";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  //Visited Coutry show Process:
  const [visitCountry, setVisitCountry] = useState([]);
//   const handleVisit = (country) => {
//     // console.log('add this to your Visited Country');
//     const MarkVisited = [...visitCountry, country];
//     setVisitCountry(MarkVisited);
//   };

  const handleVisit = (country) => {
    // Check if the country is already in the visited list
    const isVisited = visitCountry.find(visited => visited.cca3 === country.cca3);
    const isVisitedFilter = visitCountry.filter(visited => visited.cca3 !== country.cca3)

    if (isVisited) {
        // If the country is already visited, remove it from the list
        setVisitCountry(isVisitedFilter);
    } else {
        // If the country is not visited, add it to the list
        setVisitCountry([...visitCountry, country]);
    }
};
  //End Visited Country Show Process

  return (
    <div>
      <div className="visited">
        <h2>Visited Length: {visitCountry.length} </h2>
        <div className="VisitedCountry">
          {visitCountry.map(visitedCountrySingle => (
            <div className="VisitedCountrySingle">
               <h4>{visitedCountrySingle.name.common}</h4>
               {/* <img src={visitedCountrySingle.flags.png} alt="" /> */}
            </div>
          ))}
        </div>
      </div>

      <h2>Total Country show: {countries.length} </h2>
      <div className="Parent-container">
        {countries.map((country) => (
          <ShowCountry
            key={country.cca3}
            handleVisit={handleVisit}
            countryProps={country}
          ></ShowCountry>
        ))}
      </div>
    </div>
  );
};

export default Countries;
