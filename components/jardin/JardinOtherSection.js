import { LINKS } from "../../util/constants";
import OtherSection from "../miscellaneous/section/OtherSection";

const JardinOtherSection = () => {
  return (
    <OtherSection
      bottomImage1="/kid.jpg"
      bottomLabel1="Garderie le brin d'éveil"
      bottomLink1={LINKS.kindergarten}
      bottomImage2="/soup.jpg"
      bottomLabel2="Maquis le pilon"
      bottomLink2={LINKS.restaurant}
      topImage="/foot-massage.jpg"
      topLabel="Découvrez notre salon de massage"
      topLink={LINKS.massage}
    />
  );
};

export default JardinOtherSection;
