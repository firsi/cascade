import { Box, Button } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";
import { useState } from "react";
import MobileMenuContainer from "./MobileMenuContainer";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Box justify="end">
        <Button
          a11yTitle="Navigation Menu"
          icon={<MenuIcon color="light-1" />}
          onClick={handleOpen}
        />
      </Box>
      {open && <MobileMenuContainer handleClose={handleClose} />}
    </>
  );
};

export default MobileMenu;
