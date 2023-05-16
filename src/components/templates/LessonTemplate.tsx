import { Box, Text } from "native-base";
import React from "react";
import LessonLayout from "../layouts/LessonLayout";
import ChatTemplate from "./ChatTemplate";
import LessonChaptersTemplate from "./LessonChaptersTemplate";

interface LessonTemplateProps {}

const LessonTemplate: React.FC<LessonTemplateProps> = () => {
  return (
    <LessonLayout
      bg={"background.surface"}
      h={"full"}
      lessonTemplate={() => <LessonChaptersTemplate />}
      // homeWorkTemplate={() => <HomeworkTemplate />}
      homeWorkTemplate={() => <Box />}
      dictionaryTemplate={() => <Text>Dictionary</Text>}
      chatTemplate={() => <ChatTemplate />}
    />
  );
};

export default LessonTemplate;
