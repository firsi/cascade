import { useRouter } from "next/router";
import { Box, Card, CardBody, Grid, Heading, ResponsiveContext } from "grommet";
import { ThemeContext } from "styled-components";

import HoverImageCard from "../miscellaneous/cards/HoverImageCard";
import Overlay from "../miscellaneous/Overlay";
import {
  GARDEN_NAME_LONG,
  KINDERGARTEN_NAME_LONG,
  LINKS,
  MASSAGE_NAME_LONG,
  RESTAURANT_NAME_LONG,
} from "../../util/constants";
import HoverCard from "../miscellaneous/cards/HoverCard";

const ServicesList = () => {
  const router = useRouter();

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <ThemeContext.Consumer>
          {(theme) => (
            <Grid columns={{ count: size === "small" ? 1 : 2, size: "auto" }}>
              <Box direction="row">
                <HoverCard
                  backgroundColor="brand"
                  basis="1/2"
                  height="30vh"
                  hoverImage="jardin-animation.gif"
                  href={LINKS.garden}
                  title={GARDEN_NAME_LONG}
                />
                <HoverImageCard
                  backgroundImage="/service-massage.jpg"
                  basis="1/2"
                  height="30vh"
                  hoverImage="/massage-animation.gif"
                  href={LINKS.massage}
                  overlayColor={theme.global.colors["brand"]}
                  title={MASSAGE_NAME_LONG}
                />
              </Box>
              <Box direction={size === "small" ? "row-reverse" : "row"}>
                <HoverCard
                  backgroundColor="brand"
                  basis="1/2"
                  height="30vh"
                  hoverImage="restaurant-animation.gif"
                  href={LINKS.restaurant}
                  title={RESTAURANT_NAME_LONG}
                />
                <HoverImageCard
                  backgroundImage="/service-garderie.jpg"
                  basis="1/2"
                  height="30vh"
                  hoverImage="/kindergarten-animation.gif"
                  href={LINKS.kindergarten}
                  overlayColor={theme.global.colors["brand"]}
                  title={KINDERGARTEN_NAME_LONG}
                />
              </Box>
            </Grid>
          )}
        </ThemeContext.Consumer>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default ServicesList;
