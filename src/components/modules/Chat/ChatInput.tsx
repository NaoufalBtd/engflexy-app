import { FontAwesome } from "@expo/vector-icons";
import { Box, IInputProps, Icon, Input, Spinner } from "native-base";
import React from "react";

interface ChatInputProps extends IInputProps {
  sending: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ sending, ...props }) => {
  return (
    <Input
      {...props}
      variant={"filled"}
      placeholder="Type a message"
      rounded={"lg"}
      InputRightElement={
        sending ? (
          <Spinner accessibilityLabel="sending message" />
        ) : (
          <Box p={1}>
            <Box rounded={"xl"} p={3} mx={1} bg={"brand.secondary"}>
              <Icon as={FontAwesome} name="send" size={"md"} color={"white"} />
            </Box>
          </Box>
        )
      }
    />
  );
};

export default ChatInput;
