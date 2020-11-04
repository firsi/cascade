import { Box, Heading, Paragraph, ResponsiveContext } from "grommet";
import { useContext } from "react";

const Team = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      as="section"
      direction={size === "small" ? "column" : "row"}
      style={{ position: "relative" }}
      height={{ min: "initial" }}
      fill
    >
      <Box
        background={{ color: "brand" }}
        basis={size === "small" ? "" : "1/3"}
        pad={{ horizontal: "large" }}
        height={{ min: "initial" }}
      >
        <Heading color="light" level="2" size="large">
          Une équipe dynamique
        </Heading>
        <Paragraph color="light" size="medium">
          Entièrement à votre écoute et à votre disposition pour le moindre de
          vos soucis. Demandez et nous vous servirons avec le sourire
          <br />
          <br />
          <br />
          <Paragraph as="span" size="xlarge">
            +229 97 98 29 77
          </Paragraph>{" "}
          <br />
          <br />
          <Paragraph as="span" size="xlarge">
            info@lacascade.com
          </Paragraph>
        </Paragraph>
      </Box>
      <Box
        background={{
          image: "url(/serveuse.jpg)",
          position: "center",
          size: "cover",
          repeat: "no-repeat",
        }}
        height="100%"
        width="100%"
        height={{ min: "initial" }}
      ></Box>
    </Box>
  );
};

export default Team;
