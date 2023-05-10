import { Stack, useRouter } from "expo-router";
import { useAppSelector } from "../../src/hooks/stateHooks";

export const AuthLayout = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const route = useRouter();

  if (isAuthenticated) route.replace("/home");
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
