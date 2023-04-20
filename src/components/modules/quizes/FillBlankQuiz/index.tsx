import { Box, Text, View } from "native-base";
import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableWithoutFeedback } from "react-native";

type Answers = {
  [key: string]: string;
};

interface FillBlankQuizProps {
  question: string;
}

const FillBlankQuiz: React.FC<FillBlankQuizProps> = ({ question }) => {
  const [answers, setAnswers] = useState<Answers>();
  const [focusedInput, setFocusedInput] = useState("");

  const handleFocus = (inputKey: string) => {
    setFocusedInput(inputKey);
  };

  const handleBlur = () => {
    setFocusedInput("");
  };

  const handleAnswerChange = (inputKey: string, text: string) => {
    setAnswers((prevState) => ({ ...prevState, [inputKey]: text }));
  };

  const renderText = (text: string) => {
    const regex = /\[(.*?)\]/g; // split on [ and ]
    const parts = text.split(regex);

    return parts.map((part, index) => {
      const isPlaceholder = index % 2 === 1; // odd indexes are placeholders
      if (isPlaceholder) {
        return (
          <TouchableWithoutFeedback
            key={index}
            onFocus={() => handleFocus(part)}
            onBlur={handleBlur}>
            <View style={styles.inputContainer}>
              <TextInput
                style={[
                  styles.input,
                  focusedInput === part && styles.inputFocused,
                ]}
                value={answers && answers[part]}
                onChangeText={(text) => handleAnswerChange(part, text)}
              />
            </View>
          </TouchableWithoutFeedback>
        );
      }

      return (
        <Text fontSize={"lg"} key={index}>
          {part}
        </Text>
      );
    });
  };

  return <Box flexDir="row">{renderText(question)}</Box>;
};

const styles = StyleSheet.create({
  inputContainer: {
    minWidth: 70,
    width: 70,
    height: 40,
    marginHorizontal: 5,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: "#fff",
    fontStyle: "italic",
    borderStyle: "dashed",
  },
  inputFocused: {
    borderColor: "greens",
    borderStyle: "solid",
  },
});

export default FillBlankQuiz;
