import { useContext } from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Paragraph,
  ResponsiveContext,
} from "grommet";
import styled from "styled-components";

const CustomBox = styled(Box)`
  background: #189232;
  flex-direction: column;
  align-items: center;
  margin-top: -65px;
  min-height: 70vh;
  @media screen and (min-width: 600px) {
    flex-direction: row-reverse;
    min-height: 35vh;
  }
`;
const GarderieHero = () => {
  const size = useContext(ResponsiveContext);
  return (
    <CustomBox>
      <Box basis={size === "small" ? "2/4" : "2/3"} fill overflow="visible">
        <Image fit="cover" src="/kids-hero.png" />
      </Box>
      <Box
        align="start"
        basis={size === "small" ? "2/4" : "1/3"}
        fill
        justify="center"
        pad={{ horizontal: "large", bottom: "large" }}
      >
        <Heading
          color="#010A5A"
          margin={{ bottom: "0px", top: "1em" }}
          size="medium"
          style={{ position: "relative" }}
        >
          Brin d’Eveil
        </Heading>
        <Paragraph color="light-1" size="medium">
          Situé dans l'enceinte de "la cascade" C’est un environnement sécurisé,
          un cadre sain où le savoir et la distraction font bon ménage. Nous
          disposons d’un personnel qualifié. Plus de soucis à vous faire.
        </Paragraph>
        <Button href="#" label="Contactez-nous" secondary />
      </Box>
    </CustomBox>
  );
};

export default GarderieHero;
