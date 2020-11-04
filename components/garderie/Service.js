import { Box, Image, Paragraph } from "grommet";
import PropTypes from "prop-types";

const Service = ({ imageSrc, label }) => {
  return (
    <Box height={{ min: "initial" }} align="center">
      <Image alt="dortoir" height="120px" src={imageSrc} />
      <Paragraph
        as="span"
        color="inherit"
        size="large"
        style={{ fontWeight: 700 }}
        margin={{ top: "0.7em", bottom: "2em" }}
      >
        {label}
      </Paragraph>
    </Box>
  );
};

Service.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default Service;
