import { useContext } from "react";
import { Box, Heading, Image, Paragraph, ResponsiveContext } from "grommet";
import { Aed } from "grommet-icons";
import BulletPoints from "../miscellaneous/text/BulletPoints";

const ReflexologieMain = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box as="section" height={{ min: "initial" }} pad="large">
      <Heading
        level="2"
        margin={{ bottom: "0px" }}
        size="medium"
        style={{ fontWeight: 700 }}
      >
        Carte de réflexologie de la main
      </Heading>
      <Box
        direction={size === "small" ? "column" : "row"}
        height={{ min: "initial" }}
      >
        <Box basis="1/2" height={size === "small" ? "300px" : "600px"}>
          <Image alt="Reflexologie de la main" src="/main.jpg" fit="contain" />
        </Box>
        <Box basis="1/2" background="brand" justify="center" pad="large">
          <Paragraph color="white" fill>
            La réflexologie palmaire consiste à faire un massage des mains en
            stimulant des points en particulier. Les bienfaits de cette
            réflexologie peu connue sont nombreux. C’est une arme redoutable
            contre le stress, un remède en cas de crise d’asthme ou de
            bronchite, une solution efficace contre les allergies, un moyen de
            soulager une sciatique
          </Paragraph>
        </Box>
      </Box>
    </Box>
  );
};

export default ReflexologieMain;
