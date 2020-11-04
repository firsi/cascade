import { useState } from "react";
import Router from "next/router";
import { Card, CardBody, Heading, Paragraph, ThemeContext } from "grommet";
import Overlay from "../Overlay";
import PropTypes from "prop-types";

const SimpleCardImage = ({
  children,
  height,
  href,
  imgSrc,
  label,
  ...rest
}) => {
  const [opacity, setOpacity] = useState(0.4);
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <Card
          height={height}
          onClick={() => Router.push(href)}
          onMouseEnter={() => setOpacity(0.8)}
          onMouseLeave={() => setOpacity(0.4)}
          {...rest}
        >
          <CardBody
            align="center"
            background={{ image: `url(${imgSrc})` }}
            justify="center"
            pad="small"
            style={{ position: "relative" }}
          >
            <Overlay color={theme.global.colors["brand"]} opacity={opacity} />
            <Heading
              level="3"
              size="xlarge"
              color="light-1"
              style={{ position: "relative" }}
            >
              {label}
              <Paragraph size="medium" style={{ fontWeight: 400 }}>
                {children}
              </Paragraph>
            </Heading>
          </CardBody>
        </Card>
      )}
    </ThemeContext.Consumer>
  );
};

SimpleCardImage.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string.isRequired,
  href: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
SimpleCardImage.defaultProps = {
  children: "",
  height: "400px",
  href: "",
};
export default SimpleCardImage;
