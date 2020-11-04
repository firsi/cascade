import React from "react";
import { Box, Button, Heading, Paragraph } from "grommet";

const styles = {
  container: {
    minHeight: "70vh",
    height: "70vh",
    marginTop: "-65px",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "0",
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    opacity: 0.4,
  },
};
const Hero = ({ backgroundSrc, buttonLabel, ButtonLink, children, title }) => {
  return (
    <Box
      justify="center"
      align="start"
      background={{
        image: `url(${backgroundSrc})`,
        repeat: "no-repeat",
        size: "cover",
      }}
      direction="column"
      pad="large"
      style={styles.container}
    >
      <div style={styles.overlay} />
      <Heading
        color="light-1"
        margin={{ bottom: "0px" }}
        size="medium"
        style={{ position: "relative" }}
      >
        {title}
      </Heading>
      <Paragraph color="light-1" size="large" style={{ position: "relative" }}>
        {children}
      </Paragraph>
      <Button
        href={ButtonLink}
        label={buttonLabel}
        secondary
        style={{ position: "relative" }}
      />
    </Box>
  );
};

export default Hero;
