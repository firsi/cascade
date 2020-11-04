import Hero from "../miscellaneous/Hero";
import { LINKS } from "../../util/constants";

const HomeHero = () => {
  return (
    <Hero
      backgroundSrc="/home-header.jpg"
      buttonLabel="Découvrez le jardin La Cascade"
      ButtonLink={LINKS.garden}
      title="Détendez-vous et Célébrez !"
    >
      Le reste, on s’en charge ! Oubliez le stress et profitez pleinement des
      meilleurs souvenirs de votre vie
    </Hero>
  );
};

export default HomeHero;
