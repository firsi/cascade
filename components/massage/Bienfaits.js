import { useContext } from "react";
import { Box, Heading, Image, Paragraph, ResponsiveContext } from "grommet";
import { Aed } from "grommet-icons";
import BulletPoints from "../miscellaneous/text/BulletPoints";

const Bienfaits = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box as="section" height={{ min: "initial" }} pad="large">
      <Box
        direction={size === "small" ? "column" : "row"}
        height={{ min: "initial" }}
      >
        <Box basis="1/2" pad="medium">
          <Heading level="2" size="large" style={{ fontWeight: 700 }}>
            Les bienfaits du massage
          </Heading>
          <Paragraph fill>
            Depuis des millénaires, le massage est une activité pratiquée aussi
            bien la médecine traditionnelle que par la médecine conventionnelle.
            Elle permet entre autres rétablir l’équilibre entre l’esprit et le
            corps.
          </Paragraph>
          <BulletPoints icon={Aed} label="Adoucissement de la peau" />
          <BulletPoints
            icon={Aed}
            label="Evacuation des toxines et des graisses"
          />
          <BulletPoints icon={Aed} label="Atténuation des douleurs" />
          <BulletPoints
            icon={Aed}
            label="Des effets positifs sur votre esprit"
          />
        </Box>
        <Box basis="1/2" height={size === "small" ? "300px" : "600px"}>
          <Image
            alt="formation des nounous"
            src="/massage-bienfaits.jpg"
            fit="cover"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Bienfaits;
