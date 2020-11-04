import { Box, Footer as GrommetFooter, ResponsiveContext } from "grommet";
import { useContext } from "react";
import Address from "./Address";
import ContactList from "./ContactList";
import Copyright from "./Copyright";
import Illustration from "./Illustration";
import Social from "./Social";

const Footer = () => {
  const size = useContext(ResponsiveContext);
  return (
    <GrommetFooter
      align={size === "small" ? "center" : "start"}
      background="light-2"
      direction="column"
      height={{ min: "200px" }}
      pad="medium"
    >
      <Box
        align={size === "small" ? "center" : "start"}
        justify="between"
        direction={size === "small" ? "column" : "row"}
        height={{ min: "200px" }}
        fill
      >
        <ContactList />
        <Address />
        <Social />
        <Illustration />
      </Box>
      <Copyright />
    </GrommetFooter>
  );
};

export default Footer;
