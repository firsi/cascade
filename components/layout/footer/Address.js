import { Box, Paragraph } from "grommet";

const Address = () => {
  return (
    <Box direction="column">
      <Paragraph size="medium" margin="0px" style={{ fontWeight: 700 }}>
        Quartier Jack, app 234
      </Paragraph>
      <Paragraph
        size="medium"
        margin={{ top: "5px" }}
        style={{ fontWeight: 700 }}
      >
        info@lacascade.com
      </Paragraph>
    </Box>
  );
};

export default Address;
