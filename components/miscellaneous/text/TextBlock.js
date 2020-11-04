import { Box, Paragraph } from "grommet";
import PropTypes from "prop-types";
import CircleHeadings from "./CircleHeadings";

const TextBlock = ({ children, label }) => {
  return (
    <Box height={{ min: "initial" }}>
      <CircleHeadings label={label} />
      <Paragraph size="medium" margin={{ top: "xxsmall", bottom: "large" }}>
        {children}
      </Paragraph>
    </Box>
  );
};

TextBlock.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default TextBlock;
