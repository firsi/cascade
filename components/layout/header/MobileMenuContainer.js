import { Box, Button } from "grommet";
import { Close } from "grommet-icons";
import PropTypes from "prop-types";
import { LINKS } from "../../../util/constants";
import NavLink from "./NavLink";

const MobileMenuContainer = ({ handleClose }) => {
  return (
    <Box
      align="center"
      background="brand"
      height={{ min: "100vh" }}
      justify="center"
      style={{ position: "fixed", top: 0, right: 0 }}
      width={{ min: "100vw" }}
    >
      <Button
        icon={<Close color="light-1" />}
        onClick={handleClose}
        style={{ position: "absolute", top: "20px", right: "20px" }}
      />
      <Box>
        <NavLink
          href={LINKS.garden}
          label="Célébrations"
          margin={{ bottom: "small" }}
          size="xxlarge"
        />
        <NavLink
          href={LINKS.massage}
          label="Santé"
          margin={{ bottom: "small" }}
          size="xxlarge"
        />
        <NavLink
          href={LINKS.restaurant}
          label="Maquis"
          margin={{ bottom: "small" }}
          size="xxlarge"
        />
        <NavLink
          href={LINKS.kindergarten}
          label="Garderie"
          margin={{ bottom: "small" }}
          size="xxlarge"
        />
        <NavLink
          href="/boutique"
          label="Notre boutique"
          margin={{ bottom: "small" }}
          size="xxlarge"
        />
      </Box>
    </Box>
  );
};

MobileMenuContainer.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default MobileMenuContainer;
