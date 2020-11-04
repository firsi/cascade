import { LINKS } from "../../util/constants";
import OtherSection from "../miscellaneous/section/OtherSection";

const GarderieOtherSection = () => {
  return (
    <OtherSection
      bottomImage1="/foot-massage.jpg"
      bottomLabel1="Global care massage"
      bottomLink1={LINKS.massage}
      bottomImage2="/soup.jpg"
      bottomLabel2="Maquis le pilon"
      bottomLink2={LINKS.restaurant}
      topImage="/jardin-section.jpg"
      topLabel="Jardin des fêtes et loisirs la cascade"
      topLink={LINKS.garden}
    />
  );
};

export default GarderieOtherSection;
