import { Box, ResponsiveContext } from "grommet";
import { useContext } from "react";
import styled from "styled-components";
import BackgroundText from "../miscellaneous/text/BackgroundText";

const Text = styled.span`
  font-weight: 700;
  font-size: 3.7rem;
  @media screen and (min-width: 768px) {
    font-size: 5.5rem;
  }
`;
const MaquisAvantage = () => {
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
        Confortable
      </Text>
      <Text
        size="large"
        style={{ marginTop: size === "small" ? "100px" : "400px" }}
      >
        Délicieuxxx
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

export default MaquisAvantage;
