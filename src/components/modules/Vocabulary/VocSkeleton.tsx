import { Box, Skeleton, VStack } from "native-base";
import React from "react";

interface VocSkeletonProps {}

const VocSkeleton: React.FC<VocSkeletonProps> = () => {
  return (
    <Box>
      <VStack mx={"auto"} w={"90%"} py={5} alignItems={"center"} space={4}>
        <Skeleton height={5} width={200} my={"auto"} rounded={"full"} />
        <Skeleton height={350} my={"auto"} startColor={"coolGray.300"} />
        <Skeleton
          height={8}
          width={100}
          rounded={"full"}
          my={"auto"}
          startColor={"primary.400"}
        />
      </VStack>
    </Box>
  );
};

export default VocSkeleton;
