import { Stack } from "expo-router";

const CourseLayout = () => {
  return (
    <Stack>
      {/* <Stack.Screen name="course" options={{ headerShown: false }} /> */}
      <Stack.Screen name="learnWords" options={{ headerShown: false }} />
      <Stack.Screen name="talkingTime" options={{ headerShown: true }} />
      <Stack.Screen name="dragAndDrop" options={{ headerShown: true }} />
    </Stack>
  );
};
export default CourseLayout;
