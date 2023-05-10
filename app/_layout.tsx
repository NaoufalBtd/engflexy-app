import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../src/store/store";
import nativeBaseTheme from "../src/theme";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    // "Roboto-ExtraBold": require("../assets/fonts/Roboto-ExtraBold.ttf"),
    "Syne-Medium": require("../assets/fonts/Syne-Medium.ttf"),
    "Syne-Bold": require("../assets/fonts/Syne-Bold.ttf"),
    "Syne-ExtraBold": require("../assets/fonts/Syne-ExtraBold.ttf"),
    Syne: require("../assets/fonts/Syne-Regular.ttf"),
    ...FontAwesome.font,
    Poppins: require("../assets/fonts/poppins/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/poppins/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/poppins/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/fonts/poppins/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/poppins/Poppins-ExtraBold.ttf"),
    "Poppins-Black": require("../assets/fonts/poppins/Poppins-Black.ttf"),
    "Poppins-Light": require("../assets/fonts/poppins/Poppins-Light.ttf"),
    "Poppins-Thin": require("../assets/fonts/poppins/Poppins-Thin.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/poppins/Poppins-ExtraLight.ttf"),
    "Poppins-MediumItalic": require("../assets/fonts/poppins/Poppins-MediumItalic.ttf"),
    "Poppins-SemiBoldItalic": require("../assets/fonts/poppins/Poppins-SemiBoldItalic.ttf"),
    "Poppins-BoldItalic": require("../assets/fonts/poppins/Poppins-BoldItalic.ttf"),
    "Poppins-ExtraBoldItalic": require("../assets/fonts/poppins/Poppins-ExtraBoldItalic.ttf"),
    "Poppins-BlackItalic": require("../assets/fonts/poppins/Poppins-BlackItalic.ttf"),
    "Poppins-LightItalic": require("../assets/fonts/poppins/Poppins-LightItalic.ttf"),
    // Overpass: require("../assets/fonts/overpass/Overpass-Regular.ttf"),
    // "Overpass-Medium": require("../assets/fonts/overpass/Overpass-Medium.ttf"),
    // "Overpass-SemiBold": require("../assets/fonts/overpass/Overpass-SemiBold.ttf"),
    // "Overpass-Bold": require("../assets/fonts/overpass/Overpass-Bold.ttf"),
    // "Overpass-ExtraBold": require("../assets/fonts/overpass/Overpass-ExtraBold.ttf"),
    // "Overpass-Black": require("../assets/fonts/overpass/Overpass-Black.ttf"),
    // "Overpass-Light": require("../assets/fonts/overpass/Overpass-Light.ttf"),
    // "Overpass-Thin": require("../assets/fonts/overpass/Overpass-Thin.ttf"),
    // "Overpass-ExtraLight": require("../assets/fonts/overpass/Overpass-ExtraLight.ttf"),
    // "Overpass-MediumItalic": require("../assets/fonts/overpass/Overpass-MediumItalic.ttf"),
    // "Overpass-SemiBoldItalic": require("../assets/fonts/overpass/Overpass-SemiBoldItalic.ttf"),
    // "Overpass-BoldItalic": require("../assets/fonts/overpass/Overpass-BoldItalic.ttf"),
    // "Overpass-ExtraBoldItalic": require("../assets/fonts/overpass/Overpass-ExtraBoldItalic.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
      <ReduxProvider store={store}>
        {/* <PersistGate persistor={persistor} loading={null}> */}
        <NativeBaseProvider theme={nativeBaseTheme}>
          <ThemeProvider
            value={colorScheme === "dark" ? DefaultTheme : DefaultTheme}>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="modal" options={{ presentation: "modal" }} />
              <Stack.Screen name="course" options={{ headerShown: false }} />
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              <Stack.Screen name="list" options={{ headerShown: false }} />
              <Stack.Screen
                name="lessonsList"
                options={{ headerShown: false }}
              />
              <Stack.Screen name="lesson" options={{ headerShown: false }} />
              <Stack.Screen name="planning" options={{ headerShown: false }} />
            </Stack>
          </ThemeProvider>
        </NativeBaseProvider>
        {/* </PersistGate> */}
      </ReduxProvider>
    </>
  );
}
