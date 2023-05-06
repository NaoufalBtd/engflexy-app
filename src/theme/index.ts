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
    Poppins: {
      100: {
        normal: "Poppins-Thin",
        italic: "Poppins-ThinItalic",
      },
      200: {
        normal: "Poppins-ExtraLight",
        italic: "Poppins-ExtraLightItalic",
      },
      300: {
        normal: "Poppins-Light",
        italic: "Poppins-LightItalic",
      },
      400: {
        normal: "Poppins",
        italic: "Poppins-Italic",
      },
      500: {
        normal: "Poppins-Medium",
        italic: "Poppins-MediumItalic",
      },
      600: {
        normal: "Poppins-SemiBold",
        italic: "Poppins-SemiBoldItalic",
      },
      700: {
        normal: "Poppins-Bold",
        italic: "Poppins-BoldItalic",
      },
      800: {
        normal: "Poppins-ExtraBold",
        italic: "Poppins-ExtraBoldItalic",
      },
    },
    overpass: {
      100: {
        normal: "Overpass-Thin",
        italic: "Overpass-ThinItalic",
      },
      200: {
        normal: "Overpass-Light",
        italic: "Overpass-LightItalic",
      },
      300: {
        normal: "Overpass-Light",
        italic: "Overpass-LightItalic",
      },
      400: {
        normal: "Overpass",
        italic: "Overpass-Italic",
      },
      500: {
        normal: "Overpass-SemiBold",
        italic: "Overpass-SemiBoldItalic",
      },
      600: {
        normal: "Overpass-Bold",
        italic: "Overpass-BoldItalic",
      },
      700: {
        normal: "Overpass-ExtraBold",
        italic: "Overpass-ExtraBoldItalic",
      },
      800: {
        normal: "Overpass-ExtraBold",
        italic: "Overpass-ExtraBoldItalic",
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
      body: "#0A043C",
      level1: "#393884",
      level2: "#4e4d8d",
      level3: "#5a5a72",
    },
    text: {
      primary: "#EBEBEF",
      secondary: "#B9B9C6",
      tertiary: "#8F8FA3",
      link: "6FB6FF",
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
