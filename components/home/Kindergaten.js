import { Box, Heading, Image, Paragraph, ResponsiveContext } from "grommet";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import TextBlock from "../miscellaneous/text/TextBlock";

const Kindergaten = () => {
  const size = useContext(ResponsiveContext);
  const theme = useContext(ThemeContext);
  return (
    <Box as="section" height={{ min: "initial" }} fill>
      <Box
        background={{ color: "light" }}
        direction="row"
        height={{ max: "200px" }}
        pad={{ horizontal: "large" }}
        style={{ position: "relative" }}
        justify="between"
        fill
      >
        <TextBlock label="Mignon">
          Une garderie pour la petite enfance de zéro à 5 ans, une équipe
          dynamique qualifiée s'occupera de vos bouts de chou.
        </TextBlock>
        {size != "small" && (
          <Image
            alt="personnage animés"
            src="cartoon-kid.png"
            height={"80%"}
            style={{ position: "absolute", right: 0, bottom: 0 }}
          />
        )}
      </Box>
      <Box
        direction="row"
        height={{ max: "600px" }}
        fill
        style={{ position: "relative" }}
        overflow="hidden"
      >
        {size !== "small" && (
          <Box basis={"1/3"}>
            <Image fit="cover" alt="Enfants qui jouent" src="mignon-baby.png" />
          </Box>
        )}
        <Box basis={size !== "small" && "2/3"}>
          <Image fit="cover" alt="Enfants qui jouent" src="mignon-baby2.png" />
        </Box>
      </Box>
    </Box>
  );
};

export default Kindergaten;
