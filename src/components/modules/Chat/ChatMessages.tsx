import { Box, Text } from "native-base";
import React from "react";
import { ROLE_STUDENT, ROLE_TEACHER } from "../../../constants/Roles";
import { useAppTheme } from "../../../theme";
import { alpha } from "../../../utils/uiUtils";

interface ChatMessagesProps {
  messages: {
    sender: string;
    message: string;
  }[];
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  const { colors } = useAppTheme();
  return (
    <Box>
      {messages.length === 0 && (
        <Box
          p={5}
          mx={"auto"}
          w={{ base: "3/4", md: "50%" }}
          rounded={"lg"}
          backgroundColor={alpha(colors.background.body, 0.5)}>
          <Text textAlign={"center"}>No messages yet</Text>
        </Box>
      )}
      {messages.map((msg, idx) => {
        const { sender, message } = msg;
        return (
          <Box
            key={idx}
            flexDir={sender === ROLE_TEACHER ? "row" : "row-reverse"}
            alignItems="center"
            justifyContent="flex-start"
            p={2}>
            <Box
              bg={sender === ROLE_STUDENT ? "brand.secondary" : "brand.primary"}
              rounded="lg"
              maxW={"3/4"}
              p={3}
              mx={1}>
              <Text color="white">{message}</Text>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default ChatMessages;
