import React from "react";
import { useRouter } from "next/router";
import { Anchor } from "grommet";

const NavLink = ({ href, label, ...rest }) => {
  const router = useRouter();
  const active = href === router.pathname;
  return (
    <Anchor
      color={active ? "brand-contrast" : "light-1"}
      href={href}
      label={label}
      {...rest}
    />
  );
};

export default NavLink;
