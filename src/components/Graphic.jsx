import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function getGFAs() {
  switch (location) {
    case ("YYT", "YHZ"): {
      const midnight =
        "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn34/Latest-gfacn34_cldwx_000.png";
      const six =
        "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn34/Latest-gfacn34_cldwx_006.png";
      const twelve =
        "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn34/Latest-gfacn34_cldwx_012.png";
      const midnightIce =
        "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn34/Latest-gfacn34_turbc_000.png";
      const sixIce =
        "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn34/Latest-gfacn34_turbc_006.png";
      const twelveIce =
        "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn34/Latest-gfacn34_turbc_012.png";
      const forecast = {
        midnight,
        six,
        twelve,
        midnightIce,
        sixIce,
        twelveIce,
      };
      return { forecast };
    }

    case "YUL": {
      const midnight =
        "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn33/Latest-gfacn33_cldwx_000.png";
      const six =
        "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn33/Latest-gfacn33_cldwx_006.png";
      const twelve =
        "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn33/Latest-gfacn33_cldwx_012.png";
      const midnightIce =
        "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn33/Latest-gfacn33_turbc_000.png";
      const sixIce =
        "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn33/Latest-gfacn33_turbc_006.png";
      const twelveIce =
        "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn33/Latest-gfacn33_turbc_012.png";
      const forecast = {
        midnight,
        six,
        twelve,
        midnightIce,
        sixIce,
        twelveIce,
      };
      return { forecast };
    }
    default:
      throw new Error("Invalid Location");
        return (
        <Box>
          <img className="GFA" id="GfaClouds" src={forecast.six} alt="GFA 34" />
          <Button
            sx={{ m: 1, ml: 5, width: 227 }}
            className="Buttons"
            variant="contained"
            size="small"
          >
            Issued 0000Z
          </Button>
          <Button
            sx={{ m: 1, width: 227 }}
            className="Buttons"
            variant="contained"
            size="small"
          >
            Issued 0600Z
          </Button>
          <Button
            sx={{ m: 1, width: 227 }}
            className="Buttons"
            variant="contained"
            size="small"
          >
            Issued 1200Z
          </Button>
          <img
            className="GFA"
            id="GfaIcing"
            src={getGFAs(forecast.sixIce)}
            alt="GFA 34 Icing and Turbulence"
          />
        </Box>
      );
  }
}
