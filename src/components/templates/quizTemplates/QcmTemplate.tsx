import { Box, Heading } from "native-base";
import React from "react";
import { SvgXml } from "react-native-svg";
import svgTest from "../../../../assets/svg/undraw_right_places.svg";
import { QnResponses } from "../../../types/models/QnResponseModel";
import { Question } from "../../../types/models/QuestionModel";
import QcmQuiz from "../../modules/quizes/QcmQuiz";

interface QcmQuizTemplateProps {
  svg?: string;
  question: Question;
  responses: QnResponses;
}

const QcmTemplate: React.FC<QcmQuizTemplateProps> = ({
  svg = svgTest,
  question,
  responses,
}) => {
  const [width, setWidth] = React.useState(0);
  return (
    <Box
      onLayout={(e) => {
        setWidth(e.nativeEvent.layout.width);
      }}>
      <Box mb={3}>
        {svg ? <SvgXml xml={svg} width={width} height={150} /> : null}
      </Box>
      <Box mb={4}>
        {/* <Text color={"text.300"} fontSize={"md"}>
          Only One response is correct
        </Text> */}
        <Heading fontSize={"lg"}>Choose The Correct Alternative</Heading>
      </Box>
      <QcmQuiz question={question} responses={responses} />
    </Box>
  );
};

export default QcmTemplate;
