import { useContext } from "react";
import { Box, Grid, ResponsiveContext } from "grommet";
import { LINKS } from "../../util/constants";
import SimpleCardImage from "../miscellaneous/cards/SimpleCardImage";
import TextBlock from "../miscellaneous/text/TextBlock";
import styled from "styled-components";

const CustomGrid = styled(Box)`
  display: block;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3em;
  }
`;

const MassageList = () => {
  const size = useContext(ResponsiveContext);

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
      <CustomGrid>
        <Box>
          <SimpleCardImage
            height="300px"
            label="Réflexologie"
            imgSrc="/reflexologie.jpg"
            href={LINKS.massage}
          >
            c’est une médecine douce de plus en plus utilisée, car elle aide à
            apaiser les tensions, le stress, les problèmes de sommeil. La
            réflexologie plantaire dynamise l'organisme.
          </SimpleCardImage>
        </Box>
        <Box>
          <SimpleCardImage
            height="300px"
            label="Manupuncture"
            imgSrc="/manupuncture.jpg"
            href={LINKS.massage}
          >
            la Manupuncture peut jouer un rôle utile en complément de la
            médecine occidentale, en allégeant notable­ment les douleurs, en
            favorisant le rétablissement et en diminuant les effets se­condaires
            de certains médicaments.
          </SimpleCardImage>
        </Box>
        <Box>
          <SimpleCardImage
            height="300px"
            label="Acupuncture"
            imgSrc="/acupuncture.jpg"
            href={LINKS.massage}
          >
            Le massage est souvent associé à un moment de détente et de
            relaxation, mais les bienfaits de la massothérapie sont bien plus
            importants que ce qu’on pourrait imaginer.
          </SimpleCardImage>
        </Box>
        <Box>
          <SimpleCardImage
            height="300px"
            label="Fitness"
            imgSrc="/fitness.jpg"
            href={LINKS.massage}
          >
            c’est une méthode très efficace à associer aux régimes minceur pour
            retrouver la forme. Ensuite, c’est une technique de médecine douce
            qui peut traiter efficacement les affections des muscles, des os et
            des articulations. Elle soulage les spasmes, les douleurs et
            tensions musculaires, aide à évacuer le stress et les tensions
            nerveuses.
          </SimpleCardImage>
        </Box>
      </CustomGrid>
    </Box>
  );
};

export default MassageList;
