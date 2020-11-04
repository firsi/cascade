import { Box, Button, Heading, ResponsiveContext } from "grommet";
import { Aed } from "grommet-icons";
import { useContext } from "react";
import Overlay from "../miscellaneous/Overlay";
import BulletPoints from "../miscellaneous/text/BulletPoints";

const MaquisService = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      as="section"
      background={{
        image: `url(/maquis-service-background.jpg)`,
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
        <BulletPoints label="Services sur place" icon={Aed} />
        <BulletPoints label="Services emportés" icon={Aed} />
        <BulletPoints label="Service Traiteur" icon={Aed} />
        <BulletPoints
          label="Commande et livraison à domicile et pour vos manifestations"
          icon={Aed}
        />
        <BulletPoints
          label="Jus de fruits naturels et boissons de la béninoise"
          icon={Aed}
        />
      </Box>
    </Box>
  );
};

export default MaquisService;
