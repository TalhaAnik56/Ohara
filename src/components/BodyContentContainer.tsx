import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BodyContentContainer = ({ children }: Props) => {
  return (
    <Box
      bg="#3f5147"
      fontFamily={"monospace"}
    >
      {children}
    </Box>
  );
};

export default BodyContentContainer;
