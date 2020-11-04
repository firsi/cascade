import { useRef } from "react";
import { Box, Button, ResponsiveContext } from "grommet";
import {
  LinkPrevious as PreviousIcon,
  LinkNext as NextIcon,
} from "grommet-icons";
import PropTypes, { object } from "prop-types";
import Slider from "react-slick";
import styled from "styled-components";

//Slider Settings
const settings = {
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const smallSettings = {
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
};

//Styled Components
const Img = styled.img`
  object-fit: cover;
  height: 400px;
  @media screen and (min-width: 768px) {
    height: 650px;
  }
`;
const SmallImg = styled.img`
  object-fit: cover;
  height: 500px;
`;
const LeftArrow = styled(Button)`
  position: absolute;
  top: 50%;
  left: 10px;
  border-radius: 50px;
  padding: 20px;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.6);
`;
const RightArrow = styled(Button)`
  position: absolute;
  top: 50%;
  right: 10px;
  border-radius: 50px;
  padding: 20px;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.6);
`;

const CustomCarousel = ({ items }) => {
  let bigSlide = useRef(null);
  let smallSlide = useRef(null);

  const next = () => {
    bigSlide.slickNext();
    smallSlide.slickNext();
  };
  const previous = () => {
    bigSlide.slickPrev();
    smallSlide.slickPrev();
  };
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <div style={{ position: "relative" }}>
          {size === "small" ? (
            ""
          ) : (
            <>
              <LeftArrow
                icon={<PreviousIcon color="brand" size="medium" />}
                onClick={next}
                secondary
              />
              <RightArrow
                icon={<NextIcon color="brand" size="medium" />}
                onClick={previous}
                secondary
              />
            </>
          )}
          <Box
            direction="row"
            justify={size === "small" ? "center" : "between"}
            gap="xlarge"
            style={{ position: "relative" }}
          >
            <Box basis={size === "small" ? "" : "2/3"} height={{ max: "100%" }}>
              <Slider
                {...settings}
                dots={size === "small"}
                ref={(el) => (bigSlide = el)}
              >
                {items.map((item) => (
                  <Img key={item.src} src={item.src} alt={item.alt} />
                ))}
              </Slider>
            </Box>
            {size === "small" ? (
              ""
            ) : (
              <Box
                basis="1/3"
                height={{ max: "100%" }}
                margin={{ top: "xlarge" }}
              >
                <Slider {...smallSettings} ref={(el) => (smallSlide = el)}>
                  {items.map((item) => (
                    <SmallImg
                      key={`small-${item.src}`}
                      src={item.src}
                      alt={item.alt}
                    />
                  ))}
                </Slider>
              </Box>
            )}
          </Box>
        </div>
      )}
    </ResponsiveContext.Consumer>
  );
};

CustomCarousel.propTypes = {
  items: PropTypes.arrayOf(object).isRequired,
};
export default CustomCarousel;
