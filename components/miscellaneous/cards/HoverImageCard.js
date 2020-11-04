import React, { useState } from "react";
import { Card, CardBody, Heading } from "grommet";
import Overlay from "../Overlay";
import PropTypes from "prop-types";

const HoverImageCard = ({
  backgroundImage,
  hoverImage,
  href,
  overlayColor,
  title,
  ...rest
}) => {
  const [image, setImage] = useState(backgroundImage);
  return (
    <Card
      {...rest}
      onClick={() => router.push(`/${href}`)}
      onMouseEnter={() => setImage(hoverImage)}
      onMouseLeave={() => setImage(backgroundImage)}
    >
      <CardBody
        align="center"
        background={{ image: `url(${image})` }}
        justify="center"
        pad="small"
        style={{ position: "relative" }}
      >
        <Overlay color={overlayColor} opacity={0.4} />
        <Heading
          level="3"
          size="medium"
          color="light-1"
          style={{ position: "relative" }}
        >
          {title}
        </Heading>
      </CardBody>
    </Card>
  );
};

HoverImageCard.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  hoverImage: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  overlayColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default HoverImageCard;
