import { Box, Heading } from "grommet";
import PropTypes from "prop-types";
import styled from "styled-components";

const SoText = ({ className, color }) => (
  <Heading
    as="span"
    className={className}
    color="light-1"
    level="2"
    size="large"
  >
    So
  </Heading>
);
const CircleText = styled(SoText)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  background: #796e62;
`;

const CircleHeadings = ({ color, label }) => {
  return (
    <Box align="center" direction="row" gap="small">
      <CircleText color={color} />
      <Heading color="brand" level="2" size="large">
        {label}
      </Heading>
    </Box>
  );
};

CircleHeadings.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
};
CircleHeadings.default = {
  color: "#796E62",
};
export default CircleHeadings;
