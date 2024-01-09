import React from "react";
import WorldMap from "react-svg-worldmap";
import type { CountryContext } from "react-svg-worldmap";
function Locations() {
  const width = Math.min(window.innerHeight, window.innerWidth) * 0.75;
  const data = [
    { country: "in", value: 1 }, // india
    { country: "us", value: 1 }, // united states
    { country: "gb", value: 1 }, // United Kingdom
    { country: "de", value: 1 }, // Dermany
  ];

  function localizeNumber(num: number | undefined, digits: number) {
    if (typeof num === "undefined") return "";
    const magnitude = [
      { value: 1, text: " India " },
      { value: 1, text: " us" },
      { value: 1, text: " uk " },
      { value: 1, text: " de " },
    ].find((magnitude) => num >= magnitude.value);
    if (magnitude) {
      return (
        (num / magnitude.value)
          .toFixed(digits)
          .replace(/\.0+$|(?<number>\.[0-9]*[1-9])0+$/, "$1") + magnitude.text
      );
    }
    return "";
  }
  const localizedCountryDictionary = new Map<string, string>([
    ["in", "India"], // India
    ["de", "Germany"], // Mexico
    ["us", "United States"], // Nigeria
    ["gb", "United Kingdom"], // Russia
  ]);

  const getLocalizedText = ({
    countryCode,
    countryValue,
    prefix,
    suffix,
  }: CountryContext) =>
    `${
      localizedCountryDictionary.get(countryCode.toLocaleLowerCase()) ??
      "Unknown"
    }: ${prefix}${localizeNumber(countryValue, 2)}${suffix}`;

  return (
    <>
      <div>
        <WorldMap
          color="#29C3C3"
          value-suffix="people"
          size={width}
          data={data}
        />
      </div>
    </>
  );
}

export default Locations;
