import { Box, Button, Heading, ResponsiveContext } from "grommet";
import { Aed } from "grommet-icons";
import { useContext } from "react";
import Overlay from "../miscellaneous/Overlay";
import BulletPoints from "../miscellaneous/text/BulletPoints";

const JardinService = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      as="section"
      background={{
        image: `url(/jardin-service-background.jpg)`,
        repeat: "no-repeat",
        size: "cover",
      }}
      direction="row"
      height={{ min: "initial" }}
    >
      <Box
        basis={size === "small" ? "full" : "1/3"}
        height={("100%", { min: "100%" })}
        pad={{ horizontal: "medium", vertical: "large" }}
        style={{ position: "relative" }}
      >
        <Overlay color="white" opacity={0.9} />
        <Heading
          color="brand"
          level="2"
          size="large"
          style={{ position: "relative" }}
        >
          Services
        </Heading>
        <BulletPoints label="Location des lieux" icon={Aed} />
        <BulletPoints label="Logistiques" icon={Aed} />
        <BulletPoints label="Organisation des évènements de A à Z" icon={Aed} />
        <BulletPoints label="Service traiteur" icon={Aed} />
        <BulletPoints label="Décoration" icon={Aed} />
        <Button
          color="brand-contrast"
          label="Contactez nous"
          primary
          href="#"
          style={{ position: "relative" }}
        />
      </Box>
    </Box>
  );
};

export default JardinService;
