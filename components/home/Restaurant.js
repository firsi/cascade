import { useContext } from "react";
import { Box, Image, ResponsiveContext } from "grommet";
import TextBlock from "../miscellaneous/text/TextBlock";

const Restaurant = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      as="section"
      height={{ min: "initial", max: "650px" }}
      pad={{ vertical: "medium" }}
      fill
      margin={{ bottom: "large" }}
    >
      <Box
        direction={size === "small" ? "column" : "row-reverse"}
        pad={{ horizontal: "large" }}
        height={{ min: "initial", max: "100%" }}
        fill
      >
        <TextBlock label="Doux">
          Notre spécialité, c'est l'igname pilée réalisée avec un savoir-faire
          différentiel Mahi; Le maquis offre un cadre saint et agréable où vous
          pouvez manger ou emporter ; La commande de tout autre plat vous sera
          réalisée avec plaisir; Vous préferez manger dans le confort de votre
          demeure ? Pas de soucis, nous effectuons des livraisons à domicile.
        </TextBlock>
        <Box
          height={{ min: "initial", max: size === "small" ? "300px" : "600px" }}
          basis={size !== "small" && "1/2"}
          direction="row"
          flex
          align="center"
          pad={{ horizontal: "medium", vertical: "large" }}
          fill
          overflow="hidden"
        >
          <Image
            alt="plats d'igname pilée "
            src="agoun-plats.png"
            fit="contain"
            style={{ maxHeight: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Restaurant;
