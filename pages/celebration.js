import Avantage from "../components/jardin/Avantage";
import JardinGallery from "../components/jardin/JardinGallery";
import JardinHero from "../components/jardin/JardinHero";
import JardinService from "../components/jardin/JardinService";
import JardinOtherSection from "../components/jardin/JardinOtherSection";

const Celebration = () => {
  return (
    <>
      <JardinHero />
      <JardinService />
      <Avantage />
      <JardinOtherSection />
      <JardinGallery />
    </>
  );
};

export default Celebration;
