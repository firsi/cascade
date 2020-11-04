import React, { useState } from "react";
import { Card, CardBody, Heading } from "grommet";
import PropTypes from "prop-types";

const HoverCard = ({ backgroundColor, hoverImage, href, title, ...rest }) => {
  const [image, setImage] = useState(null);
  return (
    <Card
      onClick={() => router.push(`/${href}`)}
      onMouseEnter={() => setImage(hoverImage)}
      onMouseLeave={() => setImage(null)}
      {...rest}
    >
      <CardBody
        align="center"
        background={
          image ? { image: `url(${hoverImage})` } : { color: backgroundColor }
        }
        justify="center"
        pad="small"
      >
        <Heading level="3" size="medium" color="light-1">
          {title}
        </Heading>
      </CardBody>
    </Card>
  );
};
HoverCard.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  hoverImage: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HoverCard;
