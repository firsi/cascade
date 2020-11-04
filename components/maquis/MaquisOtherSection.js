import { LINKS } from "../../util/constants";
import OtherSection from "../miscellaneous/section/OtherSection";

const MaquisOtherSection = () => {
  return (
    <OtherSection
      bottomImage1="/kid.jpg"
      bottomLabel1="Garderie le brin d'éveil"
      bottomLink1={LINKS.kindergarten}
      bottomImage2="/jardin-section.jpg"
      bottomLabel2="Jardin des fêtes et loisirs la cascade"
      bottomLink2={LINKS.garden}
      topImage="/foot-massage.jpg"
      topLabel="Découvrez notre salon de massage"
      topLink={LINKS.massage}
    />
  );
};

export default MaquisOtherSection;
