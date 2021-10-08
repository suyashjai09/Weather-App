import React from "react";
export default function useData() {
  const [City, setCity] = React.useState("");
  const [enableButton, setEnableButton] = React.useState();
  React.useEffect(() => {
    if (City === "") {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
  }, [City, setEnableButton]);
  const handleChange = (e) => {
    setCity(e.target.value);
    //console.log(City);
  };
  const Api_Key = "37a66cf7e33cc142be872918c6906679";
  const [Country, setCountry] = React.useState("");
  const [notFound, setnotFound] = React.useState(true);
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    //console.log(Country);
  };

  return { City, Country, handleChange, handleCountryChange, notFound, setnotFound, enableButton, setEnableButton };
}
