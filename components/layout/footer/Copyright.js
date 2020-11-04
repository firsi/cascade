import { Paragraph } from "grommet";

const Copyright = () => (
  <Paragraph color="brand" size="medium" style={{ fontWeight: 700 }}>
    Copyright {new Date().getFullYear()} | La cascade
  </Paragraph>
);

export default Copyright;
