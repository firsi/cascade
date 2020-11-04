import { useContext } from "react";
import { Box, Heading, Image, Paragraph, ResponsiveContext } from "grommet";

const ReflexologiePied = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box as="section" height={{ min: "initial" }} pad="large">
      <Heading
        level="2"
        margin={{ bottom: "small" }}
        size="medium"
        style={{ fontWeight: 700 }}
      >
        Carte de réflexologie plantaire
      </Heading>
      <Box
        direction={size === "small" ? "column" : "row"}
        height={{ min: "initial" }}
      >
        <Box basis="1/2" background="brand" justify="center" pad="large">
          <Paragraph color="white" fill>
            La réflexologie aide à lutter contre des problèmes digestifs,
            respiratoire, des allergies, de l'eczéma, des problèmes de sommeil,
            des maux de dos, des problèmes de tension artérielles, des troubles
            hormonaux ou de l'humeur. Mais aussi les problèmes de poussée des
            dents chez les plus jeunes. Bien évidemment, certaines de ces
            maladies nécessitent de consulter un médecin traditionnel, la
            réflexologie vient en complément.
          </Paragraph>
        </Box>
        <Box basis="1/2" height={size === "small" ? "300px" : "600px"}>
          <Image alt="Reflexologie plantaire" src="/pied.jpg" fit="contain" />
        </Box>
      </Box>
    </Box>
  );
};

export default ReflexologiePied;
