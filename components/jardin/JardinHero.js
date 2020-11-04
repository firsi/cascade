import Hero from "../miscellaneous/Hero";
import { LINKS } from "../../util/constants";

const JardinHero = () => {
  return (
    <Hero
      backgroundSrc="/jardin-hero.jpg"
      buttonLabel="Découvrez nos réalisations"
      ButtonLink={LINKS.garden}
      title="Un espace de 350 places assises"
    >
      Le jardin des fêtes et loisirs est un cadre de rêve pour toutes vos
      manifestations. Un grand espace autour de son splendide jardin avec un
      parc de jeux où les enfants pourront s'éclater au cours des événements,
    </Hero>
  );
};

export default JardinHero;
