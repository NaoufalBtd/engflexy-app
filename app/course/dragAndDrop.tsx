// import { Box, Text, View } from "native-base";
// import React from "react";
// import { Image, StyleSheet } from "react-native";
// import "../../assets/svg/undraw_right_places.svg";
// import Word from "../../src/components/modules/DraggableWords/Word";
// import WordList from "../../src/components/modules/DraggableWords/WordList";
// const words = [
//   { id: 1, word: "naouf" },
//   { id: 8, word: "Name" },
//   { id: 2, word: "My" },
//   { id: 7, word: ";" },
//   { id: 6, word: "Is" },
//   { id: 9, word: "are" },
//   { id: 5, word: "ready" },
//   { id: 3, word: "you" },
//   { id: 4, word: "for" },
// ];

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });

// const Duolingo = () => {
//   const [wordListHeight, setWordListHeight] = React.useState(0);
//   return (
//     <View style={styles.container}>
//       <Image
//         source={require("../../assets/images/illustration/undraw_Right_places.png")}
//         style={{ height: 200, width: "100%", resizeMode: "contain" }}
//       />
//       <Box>
//         <Text p="3" fontSize={"md"}>
//           Drag the words into the correct order to complete the sentence.
//         </Text>
//       </Box>
//       <WordList>
//         {words.map((word) => (
//           <Word key={word.id} {...word} />
//         ))}
//       </WordList>
//     </View>
//   );
// };

// export default Duolingo;
