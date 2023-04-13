import { extendTheme } from "native-base";

const nativeBaseTheme = extendTheme({
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
});

export default nativeBaseTheme;
