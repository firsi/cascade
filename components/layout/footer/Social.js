import { Anchor, Box, Button, ResponsiveContext } from "grommet";
import { Facebook, Instagram, Youtube } from "grommet-icons";
import { useContext } from "react";

const Social = () => {
  const size = useContext(ResponsiveContext);

  return (
    <Box direction={size === "small" ? "row" : "column"}>
      {size === "small" ? (
        <>
          <Button as="a" href="#" icon={<Facebook />} />
          <Button as="a" href="#" icon={<Instagram />} />
          <Button as="a" href="#" icon={<Youtube />} />
        </>
      ) : (
        <>
          <Anchor
            color="text"
            href="#"
            icon={<Facebook />}
            label="Facebook"
            margin={{ bottom: "10px" }}
          />
          <Anchor
            color="text"
            href="#"
            href="#"
            icon={<Instagram />}
            label="Instagram"
            margin={{ bottom: "10px" }}
          />
          <Anchor
            color="text"
            href="#"
            icon={<Youtube />}
            label="Youtube"
            margin={{ bottom: "10px" }}
          />
        </>
      )}
    </Box>
  );
};

export default Social;
