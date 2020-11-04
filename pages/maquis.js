import MaquisHero from "../components/maquis/MaquisHero";
import MaquisService from "../components/maquis/MaquisService";
import MaquisAvantage from "../components/maquis/MaquisAvantage";
import MaquisOtherSection from "../components/maquis/MaquisOtherSection";
import Team from "../components/home/Team";

const maquis = () => {
  return (
    <>
      <MaquisHero />
      <MaquisService />
      <MaquisAvantage />
      <MaquisOtherSection />
      <Team />
    </>
  );
};

export default maquis;
