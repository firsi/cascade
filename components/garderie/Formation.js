import { useContext } from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Paragraph,
  ResponsiveContext,
} from "grommet";

const Formation = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box as="section" height={{ min: "initial" }} pad="medium">
      <Heading
        color="#010A5A"
        level="2"
        size="large"
        style={{ fontWeight: 700 }}
      >
        Formation des nounous
      </Heading>
      <Box
        direction={size === "small" ? "column" : "row"}
        height={{ min: "initial" }}
      >
        <Box basis="1/2" height={size === "small" && "300px"}>
          <Image alt="formation des nounous" src="/nounou.jpg" fit="cover" />
        </Box>
        <Box justify="center" basis="1/2" background="#010A5A" pad="medium">
          <Paragraph color="white" fill>
            Afin d’exercer le métier de nounou, de nombreuses compétences
            professionnelles et qualités humaines sont nécessaires.
            Savoir-faire, savoir-être et connaissances théoriques sont enseignés
            dans la formation. À l’issue de la formation, vous serez capable de
            :
          </Paragraph>
          <Paragraph color="white" style={{ fontWeight: 700 }} fill>
            - Favoriser l’éveil de l’enfant en fonction de ses besoins et de ses
            capacités
          </Paragraph>
          <Paragraph color="white" style={{ fontWeight: 700 }} fill>
            - Assurer l’entretien et l’hygiène des différents espaces de vie de
            l’enfant
          </Paragraph>
          <Paragraph color="white" style={{ fontWeight: 700 }} fill>
            - Etablir une communication professionnelle avec l’enfant et sa
            famille
          </Paragraph>
          <Paragraph color="white" fill>
            Toutes ces notions feront de vous une professionnelle efficace et
            immédiatement opérationnelle.
          </Paragraph>
          <Button
            color="brand-contrast"
            href="#"
            label="contactez-nous"
            margin={{ vertical: "medium" }}
            primary
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Formation;
