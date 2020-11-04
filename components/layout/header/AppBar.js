import { Anchor, Box, Button, Menu, ResponsiveContext } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";
import { LINKS } from "../../../util/constants";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";

const AppBar = ({ props }) => {
  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      background={{ color: "transparent" }}
      justify="between"
      pad={{ left: "medium", right: "medium", vertical: "small" }}
      style={{ zIndex: "50", position: "relative" }}
      {...props}
    >
      <Anchor
        href="/"
        label="La Cascade"
        color="light-1"
        size="xxlarge"
        margin="none"
      />
      <Box justify="end">
        <ResponsiveContext.Consumer>
          {(size) =>
            size === "small" ? (
              <MobileMenu />
            ) : (
              <Box justify="end" align="center" direction="row" gap="large">
                <Box justify="end" direction="row" gap="medium">
                  <NavLink href={LINKS.garden} label="Célébrations" />
                  <NavLink href={LINKS.massage} label="Santé" />
                  <NavLink href={LINKS.restaurant} label="Maquis" />
                  <NavLink href={LINKS.kindergarten} label="Garderie" />
                  <NavLink href="/boutique" label="Notre boutique" />
                </Box>
                <Box justify="end">
                  <Button label="Contactez-nous" color="brand" primary />
                </Box>
              </Box>
            )
          }
        </ResponsiveContext.Consumer>
      </Box>
    </Box>
  );
};

export default AppBar;
