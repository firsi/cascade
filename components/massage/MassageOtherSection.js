import { LINKS } from "../../util/constants";
import OtherSection from "../miscellaneous/section/OtherSection";

const MassageOtherSection = () => {
  return (
    <OtherSection
      bottomImage1="/kid.jpg"
      bottomLabel1="Garderie le brin d'éveil"
      bottomLink1={LINKS.kindergarten}
      bottomImage2="/soup.jpg"
      bottomLabel2="Maquis le pilon"
      bottomLink2={LINKS.restaurant}
      topImage="/jardin-section.jpg"
      topLabel="Jardin des fêtes et loisirs la cascade"
      topLink={LINKS.garden}
    />
  );
};

export default MassageOtherSection;
