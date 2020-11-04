import { useContext } from "react";
import { Box, Image, ResponsiveContext } from "grommet";
import styled from "styled-components";
import BackgroundText from "../miscellaneous/text/BackgroundText";

const Text = styled.span`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3rem;
  position: relative;
  z-index: 10;
  @media screen and (min-width: 600px) {
    font-size: 4rem;
    line-height: 4rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 5rem;
    line-height: 5rem;
  }
  @media screen and (min-width: 1268px) {
    font-size: 6rem;
    line-height: 6rem;
  }
`;
const CustomImage = styled(Image)`
  position: absolute;
  bottom: 0;
  height: 300px;
  @media screen and (min-width: 768px) {
    height: 600px;
  }
`;
const GarderieValues = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      as="section"
      direction={size === "small" ? "column" : "row-reverse"}
      justify="end"
      height={{ min: "600px" }}
      style={{ position: "relative" }}
      overflow="hidden"
      pad={{ horizontal: "large", top: "large" }}
    >
      <BackgroundText as="span">Le Brin d'Eveil</BackgroundText>
      <Box basis="2/3" height={{ min: "initial" }} pad={{ bottom: "50px" }}>
        <Text>Nous éveillons les supers pouvoirs de vos enfants</Text>
      </Box>
      <Box
        basis="1/3"
        height={{ min: size === "small" ? "300px" : "600px" }}
        fill
        style={{ position: "relative" }}
      >
        <CustomImage fit="contain" src="super-hero.png" />
      </Box>
    </Box>
  );
};

export default GarderieValues;
