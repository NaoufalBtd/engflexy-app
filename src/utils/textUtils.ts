export const formatHtml = (html: string) => {
  //replace each /n with <br>
  html = html.replace(/\n/g, "<br>");
  //replace each /t with 4 &nbsp;
  html = html.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
  //replace each space with &nbsp;
  html = html.replace(/ /g, "&nbsp;");
  return html;
};

export const toCamelCase = (str: string) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const generateUniqueId = () => {
  // Get a timestamp
  const timestamp = Date.now();

  // Generate a random number
  const randomNumber = Math.random() * 1000000000;

  // Combine the timestamp and random number
  const uniqueId = `${timestamp}-${randomNumber}`;

  // Return the unique ID
  return uniqueId;
};
