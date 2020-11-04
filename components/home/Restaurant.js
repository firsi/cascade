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
    >
      <Box
        direction={size === "small" ? "column" : "row-reverse"}
        pad={{ horizontal: "large" }}
        height={{ min: "initial" }}
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
          height={{ min: "initial", max: "600px" }}
          basis={size !== "small" && "1/2"}
          direction="row"
          flex
          align="center"
          pad={{ horizontal: "medium", vertical: "large" }}
          fill
        >
          <Image
            style={{ objectFit: "contain" }}
            alt="plats d'igname pilée "
            src="agoun-plats.png"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Restaurant;
