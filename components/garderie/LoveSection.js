import { Box, Heading, Image, Paragraph, ResponsiveContext } from "grommet";
import { useContext } from "react";

const LoveSection = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      as="section"
      background="#AC5353"
      height={{ min: "500px" }}
      pad="medium"
      margin={{ bottom: size !== "small" && "200px" }}
    >
      <Box height={{ min: "initial" }} fill style={{ position: "relative" }}>
        <Heading
          color="white"
          level="2"
          size="large"
          style={{ fontWeight: 700 }}
          margin={{ bottom: "xxsmall" }}
        >
          Beaucoup d'amour
        </Heading>
        <Paragraph color="white" size="medium">
          Nos nounous super qualifiés prendront soin de vos enfants avec
          beaucoup beaucoup beaucoup d’amour. Vos bouts de chous apprendrons un
          tas de chose tout en s’amusant
        </Paragraph>
        {size !== "small" && (
          <Image
            alt="girl-love"
            src="baby-kiss.png"
            height="270px"
            style={{ position: "absolute", bottom: "-40px", right: "10px" }}
          />
        )}
      </Box>
      <Box
        height={{ min: "initial" }}
        fill
        margin={{ horizontal: "auto", bottom: "-150px", top: "medium" }}
        width={{ max: "900px" }}
      >
        <Image
          alt="Enfant qui joue avec une adulte"
          fit="contain"
          src="kid-nounou.jpg"
          width="100%"
        />
      </Box>
    </Box>
  );
};

export default LoveSection;
