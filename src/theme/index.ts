import { extendTheme, useTheme } from "native-base";

const nativeBaseTheme = extendTheme({
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "dark",
  },

  fontConfig: {
    Roboto: {
      100: {
        normal: "Roboto-Light",
        // italic: "Roboto-LightItalic",
      },
      200: {
        normal: "Roboto-Light",
        // italic: "Roboto-LightItalic",
      },
      300: {
        normal: "Roboto-Light",
        // italic: "Roboto-LightItalic",
      },
      400: {
        normal: "Roboto-Regular",
        // italic: "Roboto-Italic",
      },
      500: {
        normal: "Roboto-Medium",
      },
      600: {
        normal: "Roboto-Medium",
        // italic: "Roboto-MediumItalic",
      },
      700: {
        normal: "Roboto-Bold",
      },
      //   800: {
      //     normal: 'Roboto-Bold',
      //     italic: 'Roboto-BoldItalic',
      //   },
      //   900: {
      //     normal: 'Roboto-Bold',
      //     italic: 'Roboto-BoldItalic',
      //   },
    },
    Syne: {
      100: {
        normal: "Syne",
        // italic: "Syne-LightItalic",
      },
      200: {
        normal: "Syne",
        // italic: "Syne-LightItalic",
      },
      300: {
        normal: "Syne",
        // italic: "Syne-LightItalic",
      },
      400: {
        normal: "Syne-Medium",
        // italic: "Syne-Italic",
      },
      500: {
        normal: "Syne-Medium",
        // italic: "Syne-MediumItalic",
      },
      600: {
        normal: "Syne-Bold",
        // italic: "Syne-MediumItalic",
      },
      700: {
        normal: "Syne-ExtraBold",
        // italic: "Syne-BoldItalic",
      },
      800: {
        normal: "Syne-ExtraBold",
        // italic: 'Syne-BoldItalic',
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "Syne",
    body: "Roboto",
    mono: "Roboto",
  },

  colors: {
    background: {
      surface: "#2e2d62",
      body: "#131318",
      level1: "#393884",
      level2: "#4e4d8d",
    },
    // background: {
    //   surface: "#09090D",
    //   body: "#131318",
    //   level1: "#434356",
    //   level2: "#5A5A72",
    // },
    brand: {
      primary: "#EA5730",
      secondary: "#9980BA",
      tertiary: "#F7EB5A",
    },
  },
});

export type ITheme = typeof nativeBaseTheme;
export const useAppTheme = useTheme as () => ITheme;
export default nativeBaseTheme;
