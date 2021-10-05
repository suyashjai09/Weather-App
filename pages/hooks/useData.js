import React from "react";
export default function useData() {
  const [City, setCity] = React.useState("Kanpur");
  const handleChange = (e) => {
    setCity(e.target.value);
    //console.log(City);
  };
  const Api_Key = "37a66cf7e33cc142be872918c6906679";
  const [Country, setCountry] = React.useState("India");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    //console.log(Country);
  };

  return { City, Country, handleChange, handleCountryChange };
}
