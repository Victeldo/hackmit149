import React, { useRef, useEffect } from "react";
import { getPreciseDistance } from "geolib";
import "./App.css";

const AutoComplete = () => {
  var loc = " ";
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    fields: ["address_components", "geometry", "icon", "name"],
  };
  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
      loc = { place };
    });
  }, []);

  function findDist() {
    console.log(loc.place.geometry["location"].lat());
    console.log(loc.place.geometry["location"].lng());
    console.log(
      getPreciseDistance(
        { latitude: 42.3344051, longitude: -71.0658327 }, //Food bank placeholder coords
        {
          latitude: loc.place.geometry["location"].lat(),
          longitude: loc.place.geometry["location"].lng(),
        }
      )
    );
  }

  return (
    <div>
      <label>enter address :</label>
      <input
        ref={inputRef}
        onChange={(evt) => {
          loc = evt.target.value;
        }}
      />
      <button onClick={findDist}>Calculate Distance to Food Bank</button>
    </div>
  );
};
export default AutoComplete;
