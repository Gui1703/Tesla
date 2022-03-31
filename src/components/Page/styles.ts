import styled from "styled-components";
const Model3 = require("../../images/Model3.jpg");
const ModelY = require("../../images/ModelY.jpg");
const ModelS = require("../../images/ModelS.jpg");
const ModelX = require("../../images/ModelX.jpg");
const SolarPanels = require("../../images/SolarPanels.jpg");
const SolarRoof = require("../../images/SolarRoof.jpg");
const Accessories = require("../../images/Accessories.jpg");

export const Container = styled.div`
  .colored:nth-child(1) {
    background: url("${Model3}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 600px) {
      background-position: 40%;
    }
  }
  .colored:nth-child(2) {
    background: url("${ModelY}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(3) {
    background: url("${ModelS}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(4) {
    background: url("${ModelX}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 600px) {
      background-position: 60%;
    }
  }
  .colored:nth-child(5) {
    background: url("${SolarPanels}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 600px) {
      background-position: 40%;
    }
  }
  .colored:nth-child(6) {
    background: url("${SolarRoof}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 600px) {
      background-position: 40%;
    }
  }
  .colored:nth-child(7) {
    background: url("${Accessories}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 600px) {
      background-position: left;
    }
  }
`;

export const Spacer = styled.div`
  height: 10vh;
  background: #77e68c;
`;
