import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  Box,
  HStack,
  Icon,
  IconButton,
  Stagger,
  useDisclose,
} from "native-base";
import React from "react";

interface LessonStaggerProps {}

const LessonStagger: React.FC<LessonStaggerProps> = () => {
  const { isOpen, onToggle } = useDisclose();

  return (
    <>
      <Box alignItems="center">
        <Stagger
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
            translateY: 34,
          }}
          animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: "timing",
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
          exit={{
            translateY: 34,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}>
          <IconButton
            mb="4"
            variant="solid"
            bg="indigo.500"
            colorScheme="indigo"
            borderRadius="full"
            icon={
              <Icon
                as={FontAwesome}
                size="6"
                name="trello"
                _dark={{
                  color: "warmGray.50",
                }}
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="yellow.400"
            colorScheme="yellow"
            borderRadius="full"
            icon={
              <Icon
                as={FontAwesome}
                _dark={{
                  color: "warmGray.50",
                }}
                size="6"
                name="microphone"
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="teal.400"
            colorScheme="teal"
            borderRadius="full"
            icon={
              <Icon
                as={FontAwesome}
                _dark={{
                  color: "warmGray.50",
                }}
                size="6"
                name="video"
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="red.500"
            colorScheme="red"
            borderRadius="full"
            icon={
              <Icon
                as={FontAwesome}
                size="6"
                name="trello"
                _dark={{
                  color: "warmGray.50",
                }}
                color="warmGray.50"
              />
            }
          />
        </Stagger>
      </Box>
      <HStack alignItems="center">
        <IconButton
          variant="solid"
          borderRadius="full"
          size="md"
          onPress={onToggle}
          bg="cyan.400"
          icon={
            <Icon
              as={FontAwesome}
              size="6"
              textAlign={"center"}
              name="ellipsis-v"
              color="warmGray.50"
              _dark={{
                color: "warmGray.50",
              }}
            />
          }
        />
      </HStack>
    </>
  );
};

export default LessonStagger;
