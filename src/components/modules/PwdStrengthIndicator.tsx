import { passwordStrength } from "check-password-strength";
import { Box, HStack, Text } from "native-base";
import React from "react";

interface PwdStrengthIndicatorProps {
  pwdStrength: ReturnType<typeof passwordStrength<string>>;
  shown?: boolean;
}

const PwdStrengthIndicator: React.FC<PwdStrengthIndicatorProps> = ({
  pwdStrength,
  shown,
}) => {
  console.log("is shown: ", pwdStrength);
  const { id: level, length, value } = pwdStrength;
  const activeColor =
    level === 0 ? "red.500" : level === 1 ? "yellow.500" : "green.500";
  const inactiveColor =
    level === 0 ? "red.200" : level === 1 ? "yellow.200" : "green.200";

  if (!shown) return null;
  return (
    <HStack space={1} alignItems={"center"}>
      <Box w={30} h={1} bg={length > 0 ? activeColor : inactiveColor} />
      <Box w={30} h={1} bg={level > 0 ? activeColor : inactiveColor} />
      <Box w={30} h={1} bg={level > 1 ? activeColor : inactiveColor} />
      <Box w={30} h={1} bg={level > 2 ? activeColor : inactiveColor} />
      <Text color={activeColor}>{value}</Text>
    </HStack>
  );
};

export default PwdStrengthIndicator;
