import { Text } from "native-base";
import React from "react";
import LessonSectionLayout from "../layouts/LessonContainerLayout";
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
      homeWorkTemplate={() => <LessonSectionLayout></LessonSectionLayout>}
      dictionaryTemplate={() => <Text>Dictionary</Text>}
      chatTemplate={() => <ChatTemplate />}
    />
  );
};

export default LessonTemplate;
