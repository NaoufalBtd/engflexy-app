import { Box, Heading, Text } from "native-base";
import React from "react";
import { SvgXml } from "react-native-svg";
import svgTest from "../../../assets/svg/undraw_right_places.svg";
import QuizLayout from "../layouts/QuizLayout";
import QcmQuiz from "../modules/quizes/QcmQuiz";

interface QcmQuizTemplateProps {
  svg?: string;
}

const QcmQuizTemplate: React.FC<QcmQuizTemplateProps> = ({ svg = svgTest }) => {
  const [width, setWidth] = React.useState(0);
  return (
    <QuizLayout>
      <Box
        onLayout={(e) => {
          setWidth(e.nativeEvent.layout.width);
        }}>
        <Box mb={3}>
          {!!svg ? <SvgXml xml={svg} width={width} height={150} /> : null}
        </Box>
        <Box mb={4}>
          <Text color={"text.300"} fontSize={"md"}>
            Question 9 of 10
          </Text>
          <Heading fontSize={"lg"}>Choose The Correct Alternative</Heading>
        </Box>
        <QcmQuiz
          question={{
            questionText: "Hello [name], how are you ?",
          }}
          answers={[
            { answerText: "naoufal", isCorrect: false },
            { answerText: "Ahmad", isCorrect: true },
            { answerText: "Amine", isCorrect: false },
          ]}
        />
      </Box>
    </QuizLayout>
  );
};

export default QcmQuizTemplate;
