import { Stack } from "expo-router";

const CourseLayout = () => {
  return (
    <Stack>
      {/* <Stack.Screen name="course" options={{ headerShown: false }} /> */}
      <Stack.Screen name="learnWords" options={{ headerShown: false }} />
    </Stack>
  );
};
export default CourseLayout;
