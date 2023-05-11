import { Box } from "native-base";
import { InterfaceBoxProps } from "native-base/lib/typescript/components/primitives/Box";
import React from "react";

interface CenterSurfaceProps extends InterfaceBoxProps {
  children: React.ReactNode;
}

const SurfaceCenter: React.FC<CenterSurfaceProps> = ({
  children,
  ...props
}) => {
  return (
    <Box
      h="full"
      {...props}
      alignItems={"center"}
      flexDir={"row"}
      justifyContent={"center"}>
      {children}
    </Box>
  );
};

export default SurfaceCenter;
