import React from "react";
import type { ComponentProps } from "react";
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
      { value: 1, text: " Pragmat Digital IT Solutions, Plot No 318, Sy.No.11/14, Road No.1, Ayyappa Society, Khanamet, Madhapur,Hyderabad-50081,Telangana, INDIA " },
      { value: 1, text: " us" },
      { value: 1, text: " Praxis Digital 8 Devonshire Square, London,  EC2M 4PL " },
      { value: 1, text: " AKGX Digital Services GmbH, Bismarckstr. 100, 41061 Mönchengladbach, Germany " },
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

    function createTextLabels(width: number) {
        const labels: ({ label: string } & ComponentProps<"text">)[] = [
          { label: "Atlantic", x: 0.37 * width, y: 0.39 * width },
          { label: "Pragmat Digital IT Solutions, Madhapur,Hyderabad-50081,INDIA", x: 0.5 * width, y: 0.07 * width },
          { label: "Pacific", x: 0.083 * width, y: 0.48 * width },
          {
            label: "Arctic",
            x: 0.75 * width,
            y: 0.058 * width,
            style: { fill: "blue" },
          },
        ];
        if (width < 550) {
          return labels.map((label) => ({
            ...label,
            style: { ...label.style, fontSize: "70%" },
          }));
        }
        return labels;
      }
  return (
    <>
        <h2 className="text-center text-2xl">Our Presence</h2>
      <div className="container flex justify-center items-center">
        <WorldMap
          color="#29C3C3"
          value-suffix="people"
          size={width}
          data={data}
        //   textLabelFunction={createTextLabels}
        />
      </div>
    </>
  );
}

export default Locations;
