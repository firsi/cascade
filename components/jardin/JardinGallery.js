import { Box, Heading, Image } from "grommet";
import Slider from "react-slick";

const JardinGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box
      as="section"
      height={{ min: "initial" }}
      pad="medium"
      margin={{ bottom: "large" }}
    >
      <Heading level="3" size="large" color="brand">
        Gallerie
      </Heading>
      <Slider {...settings}>
        <Image fit="cover" height="400px" src="/gal1.jpg" />
        <Image fit="cover" height="400px" src="/gal2.jpg" />
        <Image fit="cover" height="400px" src="/gal3.jpg" />
        <Image fit="cover" height="400px" src="/gal1.jpg" />
      </Slider>
    </Box>
  );
};

export default JardinGallery;
