export const alpha = (color: string, opacity: number) => {
  const alphaValue = Math.round(opacity * 255);
  const colorValue = color.startsWith("#") ? color.slice(1) : color;
  const hexValue = `#${colorValue}${alphaValue.toString(16).padStart(2, "0")}`;
  return `rgba(${parseInt(colorValue.substring(0, 2), 16)}, ${parseInt(
    colorValue.substring(2, 4),
    16
  )}, ${parseInt(colorValue.substring(4, 6), 16)}, ${opacity})`;
};
