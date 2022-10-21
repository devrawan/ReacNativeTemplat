import { DarkTheme, DefaultTheme } from "@react-navigation/native";

const DarkValues = {
  dark: DarkTheme.dark,
  colors: {
    ...DarkTheme.colors,
    background:'black',
    text:'white',
    border: "white",
   
  },
};
const LightValues = {
  dark: DefaultTheme.dark,
  colors: {
    ...DefaultTheme.colors,
    background:'white',
    text:'black',
    border: "black",
   
  },
};

export { DarkValues, LightValues };