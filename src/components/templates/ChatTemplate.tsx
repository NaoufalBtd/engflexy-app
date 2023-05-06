import { Box, ScrollView } from "native-base";
import React from "react";
import { useAppTheme } from "../../theme";
import { alpha } from "../../utils/uiUtils";
import ChatInput from "../modules/Chat/ChatInput";
import ChatMessages from "../modules/Chat/ChatMessages";

interface ChatTemplateProps {}

const messages = [
  {
    id: 1,
    message: "Hello",
    sender: "TEACHER",
    timestamp: "2021-10-10T12:00:00.000Z",
  },
  {
    id: 2,
    message: "Hello",
    sender: "STUDENT",
    timestamp: "2021-10-10T12:00:00.000Z",
  },
  {
    id: 3,
    message: "how are you?",
    sender: "TEACHER",
    timestamp: "2021-10-10T12:00:00.000Z",
  },
  {
    id: 3,
    message: "how are you?",
    sender: "TEACHER",
    timestamp: "2021-10-10T12:00:00.000Z",
  },
  {
    id: 3,
    message: "how are you?",
    sender: "TEACHER",
    timestamp: "2021-10-10T12:00:00.000Z",
  },
  {
    id: 3,
    message: "how are you?",
    sender: "TEACHER",
    timestamp: "2021-10-10T12:00:00.000Z",
  },
  {
    id: 3,
    message: "how are you?",
    sender: "TEACHER",
    timestamp: "2021-10-10T12:00:00.000Z",
  },
  {
    id: 3,
    message: "how are you?",
    sender: "TEACHER",
    timestamp: "2021-10-10T12:00:00.000Z",
  },
  {
    id: 3,
    message: "how are you?",
    sender: "TEACHER",
    timestamp: "2021-10-10T12:00:00.000Z",
  },
  {
    id: 4,
    message: "I am fine",
    sender: "STUDENT",
  },
];

const ChatTemplate: React.FC<ChatTemplateProps> = () => {
  const { colors } = useAppTheme();
  return (
    <Box pt={5}>
      <Box
        mx={"auto"}
        borderTopRadius={50}
        bgColor={"background.level1"}
        w="98%"
        h="full">
        <ScrollView mb={20} mt={10}>
          <ChatMessages messages={[]} />
        </ScrollView>
        <Box
          bg={alpha(colors.background.level1, 0.5)}
          bottom={0}
          position={"absolute"}
          w="full"
          py={3}
          px={2}>
          <ChatInput sending={false} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChatTemplate;
