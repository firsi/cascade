import { useContext } from "react";
import { Box, Heading, ResponsiveContext } from "grommet";
import Service from "./Service";

const GarderieService = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      as="section"
      justify="end"
      background={{
        image: `url(/baby-playing.jpg)`,
        repeat: "no-repeat",
        size: "cover",
      }}
      direction="row"
      height={{ min: "initial" }}
    >
      <Box
        background="#354F77"
        basis={size === "small" ? "full" : "1/2"}
        height={("100%", { min: "100%" })}
        pad={{ horizontal: "medium", vertical: "large" }}
        style={{ position: "relative", color: "white" }}
      >
        <Heading
          color="inherit"
          level="2"
          size="large"
          style={{ position: "relative" }}
        >
          Nous vous offrons:
        </Heading>
        <Box
          height={{ min: "initial" }}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
        >
          <Service imageSrc="/dortoir.png" label="2 Dortoirs" />
          <Service imageSrc="/game.png" label="1 Salle d'éveil" />
          <Service imageSrc="/cantine.png" label="1 Cantine" />
          <Service imageSrc="/jeux.png" label="1 Espace de jeux" />
        </Box>
      </Box>
    </Box>
  );
};

export default GarderieService;
