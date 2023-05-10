import { Heading, Progress } from "native-base";
import React from "react";
import { calculatePercentage } from "../../utils";

interface QuizProgressProps {
  index: number;
  length: number;
}

const ProgressBar: React.FC<QuizProgressProps> = ({ index, length }) => {
  return (
    <>
      <Heading textAlign="center" fontStyle="italic" color="primary.400">
        {index + 1} in row
      </Heading>
      <Progress
        size="md"
        colorScheme={"primary"}
        value={calculatePercentage(index + 1, length)}
      />
    </>
  );
};

export default ProgressBar;
