import { Box, Paragraph } from "grommet";
import PropTypes from "prop-types";

const Contact = ({ contact, title }) => {
  return (
    <Box direction="column">
      <Paragraph size="medium" style={{ fontWeight: 700 }} margin="0px">
        {title}
      </Paragraph>
      <Paragraph size="medium" margin={{ top: "5px" }}>
        {contact}
      </Paragraph>
    </Box>
  );
};

Contact.propTypes = {
  contact: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Contact;
