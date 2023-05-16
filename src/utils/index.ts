import { NormalizedData, NullableValue } from "../types";

export const isLastIndex = (arr: any[], index: number) => {
  return index === arr.length - 1;
};

export const calculatePercentage = (number: number, length: number) => {
  const per = (number / length) * 100;
  return Math.round(per);
};

export const getAspectRatio = (width: number, height: number) => {
  return width / height;
};

export const getElementFromNormalizedData = <T>(
  data: NormalizedData<T>,
  index: number
) => {
  return data.byId[data.allIds[index]];
};

export const checkNullishValues = (values: NullableValue[]): boolean => {
  for (let i = 0; i < values.length; i++) {
    //get the key and value of the object
    const [name, value] = Object.entries(values[i])[0];
    if (value === undefined || value === null) {
      console.error(`Variable "${name}" is nullish.`);
      return true;
    }
  }

  return false;
};
