export const removeAllClassesUsingRegex = (htmlString: string) => {
  return htmlString
    .replace(/\s*class="[^"]*"/g, "")
    .replace(/\s*style="[^"]*"/g, "");
};
