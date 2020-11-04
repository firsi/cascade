import { Box, Paragraph } from "grommet";
import { Facebook } from "grommet-icons";

const BulletPoints = ({ icon: Icon, label }) => {
  return (
    <Box
      align="center"
      direction="row"
      margin={{ bottom: "30px" }}
      style={{ position: "relative" }}
    >
      <Icon />
      <Paragraph
        as="span"
        margin={{ left: "small" }}
        size="medium"
        style={{ fontWeight: 700 }}
      >
        {label}
      </Paragraph>
    </Box>
  );
};

export default BulletPoints;
