import React from "react";

import WorldMap from "react-svg-worldmap";

function Locations() {
  //const width = Math.min(window.innerHeight, window.innerWidth) * 0.75;
  const data = [
    { country: "in", value: 1 }, // india
    { country: "us", value: 1 }, // united states
    { country: "gb", value: 1 }, // United Kingdom
    { country: "de", value: 1 }, // Dermany
  ];

  //console.log(width);

  return (
    <>
    <br />
    <br />
        <h2 className="text-center text-4xl underline">Our Presence</h2>
      <div className="container flex justify-center items-center">
        <WorldMap
          color="#00df9a"
          value-suffix="people"
          size={560}
          data={data}
        //   textLabelFunction={createTextLabels}
        />
      </div>
    </>
  );
}

export default Locations;
