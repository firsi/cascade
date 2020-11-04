import Bienfaits from "../components/massage/Bienfaits";
import MassageHero from "../components/massage/MassageHero";
import MassageList from "../components/massage/MassageList";
import MassageOtherSection from "../components/massage/MassageOtherSection";
import ReflexologieMain from "../components/massage/ReflexologieMain";
import ReflexologiePied from "../components/massage/ReflexologiePied";
import Team from "../components/home/Team";

const Massage = () => {
  return (
    <>
      <MassageHero />
      <Bienfaits />
      <MassageList />
      <ReflexologieMain />
      <ReflexologiePied />
      <MassageOtherSection />
      <Team />
    </>
  );
};

export default Massage;
