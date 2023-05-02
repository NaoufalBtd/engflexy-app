export const isLastIndex = (arr: any[], index: number) => {
  return index === arr.length - 1;
};

export const calculatePercentage = (index: number, length: number) => {
  const per = (index / length) * 100;
  return Math.round(per);
};
