import Animated from "react-native-reanimated";

export type SharedValues<T extends Record<string, string | number | boolean>> =
  {
    [K in keyof T]: Animated.SharedValue<T[K]>;
  };

export type NormalizedData<T> = {
  byId: Record<number, T>;
  allIds: number[];
};

export type NullableValue = {
  [key: string]: any | undefined | null;
};
