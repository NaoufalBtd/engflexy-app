import { Button, Factory, Text } from "native-base";
import React from "react";

interface navButtonProps {
  text: string;
  direction: "left" | "right";
}

const borderRadiusSize = 20;

const navButton: React.FC<navButtonProps> = ({ text, direction }) => {
  const borderRadius =
    direction === "left"
      ? {
          borderTopLeftRadius: borderRadiusSize,
          borderBottomLeftRadius: borderRadiusSize,
        }
      : {
          borderTopRightRadius: borderRadiusSize,
          borderBottomRightRadius: borderRadiusSize,
        };
  return (
    <Button px={6} py={3} style={{ ...borderRadius }}>
      <Text>{text}</Text>
    </Button>
  );
};

export default Factory(navButton);
