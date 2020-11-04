import { useContext } from "react";
import { Box, Image, ResponsiveContext } from "grommet";
import PropTypes from "prop-types";
import TextBlock from "../text/TextBlock";
import SimpleCardImage from "../cards/SimpleCardImage";

const OtherSection = ({
  bottomLabel1,
  bottomLabel2,
  bottomLink1,
  bottomLink2,
  bottomImage1,
  bottomImage2,
  topLabel,
  topImage,
  topLink,
}) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      as="section"
      background="light"
      height={{ min: "initial" }}
      style={{ position: "relative" }}
      pad="medium"
    >
      <TextBlock label="Fun Fun Fun !">
        Le jardin des fêtes et loisirs est un cadre de rêve pour toutes vos
        manifestations. Situé derrière les Grands Moulins du Bénin (GMB), elle
        met à votre disposition :
      </TextBlock>
      {size !== "small" && (
        <Image
          height="280px"
          src="/ballons.png"
          style={{ position: "absolute", right: "40px" }}
        />
      )}
      <Box
        fill
        height={{ min: "initial", max: size === "small" ? "600px" : "initial" }}
        style={{ height: size === "small" ? "600px" : "700px" }}
        align="center"
      >
        <Box
          fill
          height={{ min: "initial" }}
          style={{ height: size === "small" ? "50%" : "100%" }}
          width={{ max: "xlarge" }}
        >
          <SimpleCardImage
            basis="full"
            height={{ max: "100%" }}
            href={topLink}
            imgSrc={topImage}
            label={topLabel}
          />
        </Box>
        <Box
          direction="row"
          fill
          height={{ min: "initial" }}
          style={{ height: size === "small" ? "50%" : "100%" }}
          width={{ max: "xlarge" }}
        >
          <SimpleCardImage
            basis="1/2"
            height={{ max: "100%" }}
            href={bottomLink1}
            imgSrc={bottomImage1}
            label={bottomLabel1}
          />
          <SimpleCardImage
            basis="1/2"
            height={{ max: "100%" }}
            href={bottomLink2}
            imgSrc={bottomImage2}
            label={bottomLabel2}
          />
        </Box>
      </Box>
    </Box>
  );
};

OtherSection.propTypes = {
  bottomLabel1: PropTypes.string.isRequired,
  bottomLabel2: PropTypes.string.isRequired,
  bottomLink1: PropTypes.string.isRequired,
  bottomLink2: PropTypes.string.isRequired,
  bottomImage1: PropTypes.string.isRequired,
  bottomImage2: PropTypes.string.isRequired,
  topLabel: PropTypes.string.isRequired,
  topImage: PropTypes.string.isRequired,
  topLink: PropTypes.string.isRequired,
};
export default OtherSection;
