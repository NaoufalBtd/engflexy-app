import React from "react";
import { StyleSheet, View } from "react-native";
import { NUMBER_OF_LINES, WORD_HEIGHT } from "../../constants/DragLayout";

const Lines = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      {new Array(NUMBER_OF_LINES).fill(0).map((_, index) => (
        <View
          key={index * WORD_HEIGHT}
          style={{
            top: index * WORD_HEIGHT - 2,
            width: "100%",
            height: 5,
            backgroundColor: "#a0a0a0",
          }}
        />
      ))}
    </View>
  );
};

export default Lines;
