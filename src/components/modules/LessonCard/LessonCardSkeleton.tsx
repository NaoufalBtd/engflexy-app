import { Box, HStack, Skeleton } from "native-base";
import React from "react";

interface LessonCardSkeletonProps {}

const LessonCardSkeleton: React.FC<LessonCardSkeletonProps> = () => {
  return (
    <Box
      flexDir={"row"}
      justifyContent={"space-between"}
      w="full"
      bgColor={"background.level1"}
      borderRadius={"xl"}
      py="4"
      shadow={5}
      px={3}
      alignItems={"center"}>
      <HStack alignItems={"center"} w={"4/5"} space={2} mr={3}>
        <Box p="2" borderRadius={"full"}>
          <Skeleton
            rounded={"full"}
            width={10}
            height={10}
            startColor={"brand.secondary"}
          />
        </Box>
        <Box w={"70%"}>
          <Skeleton width={"100%"} height={5} rounded={"full"} />
        </Box>
      </HStack>
      <Skeleton
        flex={1}
        height={5}
        rounded={"full"}
        startColor={"primary.300"}
      />
    </Box>
  );
};

export default LessonCardSkeleton;
