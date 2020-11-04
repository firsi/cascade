import { useContext } from "react";
import { Box, Grid, ResponsiveContext } from "grommet";
import { LINKS } from "../../util/constants";
import SimpleCardImage from "../miscellaneous/cards/SimpleCardImage";
import TextBlock from "../miscellaneous/text/TextBlock";

const Massage = () => {
  const size = useContext(ResponsiveContext);

  const columnSize = (size) => {
    if (size === "small") {
      return "100%";
    } else if (size === "medium") {
      return "medium";
    } else if (size === "large") {
      return "medium";
    }
  };
  return (
    <Box
      as="section"
      background={{ color: "light" }}
      style={{ position: "relative" }}
      pad={{
        top: "medium",
        bottom: "large",
        horizontal: "large",
      }}
      height={{ min: "initial" }}
    >
      <TextBlock label="Zen">
        Fatigué , Epuisé ou Stressé ? Pas de panique. Nous disposons de
        spécialistes qui interviendront pour tout genre de massages afin de vous
        détendre.
      </TextBlock>
      <Grid columns={columnSize(size)} gap="large">
        <Box>
          <SimpleCardImage
            basis="1/2"
            label="Réflexologie"
            imgSrc="/reflexologie.jpg"
            href={LINKS.massage}
          />
        </Box>
        <Box>
          <SimpleCardImage
            basis="1/2"
            label="Manupuncture"
            imgSrc="/manupuncture.jpg"
            href={LINKS.massage}
          />
        </Box>
        <Box>
          <SimpleCardImage
            basis="1/2"
            label="Acupuncture"
            imgSrc="/acupuncture.jpg"
            href={LINKS.massage}
          />
        </Box>
        <Box>
          <SimpleCardImage
            basis="1/2"
            label="Fitness"
            imgSrc="/fitness.jpg"
            href={LINKS.massage}
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default Massage;
