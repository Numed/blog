import { CategoryButtonType, ColorVariantsType } from "./types";

const CategoryButton = ({ color, text }: CategoryButtonType) => {
  const colorVariants: ColorVariantsType = {
    Blue: "blue",
    Pink: "pink",
    Purple: "purple",
    DarkBlue: "dark-blue",
    Green: "green",
    Orange: "orange",
  };

  return <span className={colorVariants[color]}>{text}</span>;
};

export default CategoryButton;
