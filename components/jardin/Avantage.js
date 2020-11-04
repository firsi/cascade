import { Box, ResponsiveContext } from "grommet";
import { useContext } from "react";
import styled from "styled-components";
import BackgroundText from "../miscellaneous/text/BackgroundText";

const Text = styled.span`
  font-weight: 700;
  font-size: 4.5rem;
  @media screen and (min-width: 768px) {
    font-size: 7rem;
  }
`;
const Avantage = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      as="section"
      direction={size === "small" ? "column" : "row"}
      justify="center"
      height={{ min: "600px" }}
      style={{ position: "relative" }}
      overflow="hidden"
      pad="large"
    >
      <BackgroundText as="span">Jardin La Cascade</BackgroundText>
      <Text
        size="large"
        style={{ marginTop: size === "small" ? "0px" : "100px" }}
      >
        Chic
      </Text>
      <Text
        size="large"
        style={{ marginTop: size === "small" ? "100px" : "250px" }}
      >
        Classe
      </Text>
      <Text
        size="large"
        style={{ marginTop: size === "small" ? "100px" : "400px" }}
      >
        Relaxant
      </Text>
      <Text
        size="large"
        style={{
          marginTop: size === "small" ? "100px" : "550px",
          marginLeft: size === "small" ? "0px" : "-140px",
        }}
      >
        Abordable
      </Text>
    </Box>
  );
};

export default Avantage;
