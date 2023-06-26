export const setColor = (el: string) => {
  if (el === "Design" || el === "Leadership") {
    return "Purple";
  } else if (el === "Research" || el === "Customer Success") {
    return "Blue";
  } else if (el === "Presentation" || el === "Tools") {
    return "Pink";
  } else if (el === "Interface" || el === "Software Development") {
    return "Green";
  } else if (el === "Framework" || el === "SaaS") {
    return "Orange";
  } else if (el === "Podcast") {
    return "DarkBlue";
  } else {
    return "Blue";
  }
};
