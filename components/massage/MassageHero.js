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
import Overlay from "../miscellaneous/Overlay";

const CustomBox = styled(Box)`
  position: relative;
  @media screen and (min-width: 600px) {
    min-height: 35vh;
  }
  @media screen and (min-width: 1200px) {
    min-height: 70vh;
  }
`;
const MassageHero = () => {
  const size = useContext(ResponsiveContext);
  return (
    <CustomBox
      align="end"
      background={{
        image: `url(/massage-hero.jpg)`,
        repeat: "no-repeat",
        size: "cover",
      }}
      height={{ min: "70vh" }}
      justify="end"
      margin={{ top: "-65px" }}
      pad="large"
    >
      <Overlay />
      <Box
        height={{ min: "initial" }}
        align="center"
        style={{ position: "relative" }}
        pad="small"
        width="600px"
      >
        <Overlay color="#513307" opacity="0.9" />
        <Heading
          level="1"
          color="white"
          margin={{ bottom: "xsmall" }}
          style={{ position: "relative" }}
        >
          Laissez-vous tenter
        </Heading>
        <Paragraph color="white" style={{ position: "relative" }}>
          Nos praticiennes ont toutes en commun l’inspiration et adaptent les
          manoeuvres selon vos besoins dans un environnement saint et reposant.
        </Paragraph>
      </Box>
    </CustomBox>
  );
};

export default MassageHero;
