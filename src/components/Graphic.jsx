import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

const getLocation = (location) => {
  switch (location) {
    case "YYT":
    case "YHZ":
      return "gfacn34";
    case "YUL":
      return "gfacn33";
    default:
      throw new Error("Invalid airport code");
  }
};

const getMap = (location, type, time) =>
  `https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/${location}/Latest-${location}_${type}_${time}.png`;

export default function Graphic({ location }) {
  return (
    <>
      <img
        className="GFA"
        id="GfaClouds"
        src={getMap(getLocation(location), "cldwx", "006")}
        alt="GFA 34"
      />
      <Box>
        <Button
          sx={{ m: 1, width: 245 }}
          className="Buttons"
          variant="contained"
          size="small"
        >
          0000Z Forecast
        </Button>
        <Button
          sx={{ m: 1, width: 245 }}
          className="Buttons"
          variant="contained"
          size="small"
        >
          0600Z Forecast
        </Button>
        <Button
          sx={{ m: 1, width: 245 }}
          className="Buttons"
          variant="contained"
          size="small"
        >
          1200Z Forecast
        </Button>
      </Box>
      <img
        className="GFA"
        id="GfaIcing"
        src={getMap(getLocation(location), "turbc", "006")}
        alt="GFA 34 Icing and Turbulence"
      />
    </>
  );
}
Graphic.propTypes = {
  location: PropTypes.string.isRequired,
};
