import { Box } from "native-base";
import React from "react";
import BackButton from "../elements/BackButton";

interface HeaderProps {
  headerRight?: React.ReactNode;
  headerCenter?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ headerCenter, headerRight }) => {
  return (
    <Box
      flexDir={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={3}>
      <BackButton />
      {headerCenter}
      {headerRight}
    </Box>
  );
};

export default Header;
