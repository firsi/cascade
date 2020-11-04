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
  background: #5e5c5c;
  flex-direction: column;
  align-items: center;
  margin-top: -65px;
  min-height: 70vh;
  @media screen and (min-width: 600px) {
    flex-direction: row;
    min-height: 35vh;
  }
`;
const MaquisHero = () => {
  const size = useContext(ResponsiveContext);
  return (
    <CustomBox>
      <Box
        basis={size === "small" ? "2/4" : "2/3"}
        fill
        style={{ height: size === "small" ? "300px" : "auto" }}
        overflow="visible"
      >
        <Image fit="contain" src="/restaurant-hero.png" />
      </Box>
      <Box
        align="start"
        basis={size === "small" ? "2/4" : "1/3"}
        fill
        justify="center"
        pad={{ horizontal: "large", bottom: "large" }}
      >
        <Heading
          color="light-1"
          margin={{ bottom: "0px", top: "1em" }}
          size="medium"
          style={{ position: "relative" }}
        >
          Maquis Le Pilon
        </Heading>
        <Paragraph color="light-1" size="medium">
          Spécialisé en igname pilé saveur mahi, nous vous offrons une samm
          climatisée de 40 personnes et un espace ouvert de 60 personnes.
        </Paragraph>
        <Button href="#" label="Contactez-nous" secondary />
      </Box>
    </CustomBox>
  );
};

export default MaquisHero;
