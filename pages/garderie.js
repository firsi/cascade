import React from "react";
import Formation from "../components/garderie/Formation";
import GarderieHero from "../components/garderie/GarderieHero";
import GarderieOtherSection from "../components/garderie/GarderieOtherSection";
import GarderieService from "../components/garderie/GarderieService";
import GarderieValues from "../components/garderie/GarderieValues";
import LoveSection from "../components/garderie/LoveSection";

const Garderie = () => {
  return (
    <>
      <GarderieHero />
      <GarderieService />
      <GarderieValues />
      <LoveSection />
      <Formation />
      <GarderieOtherSection />
    </>
  );
};

export default Garderie;
