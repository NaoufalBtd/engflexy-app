export const formatHtml = (html: string) => {
  //replace each /n with <br>
  html = html.replace(/\n/g, "<br>");
  //replace each /t with 4 &nbsp;
  html = html.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
  //replace each space with &nbsp;
  html = html.replace(/ /g, "&nbsp;");
  return html;
};
