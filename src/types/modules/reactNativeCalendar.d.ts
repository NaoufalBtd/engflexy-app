//overide the default theme from react-native-calendars

import { Theme as CTheme } from "react-native-calendars/src/types";

declare module "react-native-calendars/src/types" {
  export interface Theme extends CTheme {
    reservationsBackgroundColor: string;
  }
}
