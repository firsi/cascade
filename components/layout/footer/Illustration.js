import { Box, Image, ResponsiveContext } from "grommet";
import { useContext } from "react";

const Illustration = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box pad="0px" margin={{ top: size === "small" ? "0px" : "-100px" }}>
      <Image
        src="minions-family.png"
        alt="minions family"
        height="400px"
        style={{ position: "relative" }}
      />
    </Box>
  );
};

export default Illustration;
