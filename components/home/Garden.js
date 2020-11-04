import { Box, ResponsiveContext } from "grommet";
import styled from "styled-components";
import CustomCarousel from "../miscellaneous/CustomCarousel";
import TextBlock from "../miscellaneous/text/TextBlock";

const imageList = [
  { src: "img1.jpg", alt: "" },
  { src: "img2.jpg", alt: "" },
];
const BackgroundCharacter = styled.img`
  position: absolute;
  top: 130px;
  right: 0;
  width: 200px;
  z-index: -1;
  opacity: 0.3;
  @media screen and (min-width: 325px) {
    top: 70px;
  }
  @media screen and (min-width: 475px) {
    top: 20px;
  }
  @media screen and (min-width: 595px) {
    top: 0;
    opacity: 1;
  }
  @media screen and (min-width: 768px) {
    top: 180px;
    width: 200px;
    z-index: initial;
  }
  @media screen and (min-width: 968px) {
    top: 50px;
    width: 280px;
    z-index: initial;
  }
  @media screen and (min-width: 1377px) {
    top: -40px;
    width: auto;
    z-index: initial;
  }
`;

const Garden = () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          as="section"
          style={{ position: "relative" }}
          pad={{
            vertical: "medium",
            left: "large",
            right: size === "small" ? "large" : "",
          }}
          height={{ min: "initial" }}
        >
          <BackgroundCharacter src="/minions.png" alt="minions smilling" />
          <TextBlock label="Chic">
            Louez un splendide jardin pour vos célébrations en tout genre. Nous
            pouvons nous charger de toute l’organisation nécéssaire. Il suffit
            d’énoncer vos souhaits. Notre équipe dynamique et professionnelle se
            chargera de sastifaire vos moindres désirs
          </TextBlock>
          <CustomCarousel items={imageList} />
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Garden;
