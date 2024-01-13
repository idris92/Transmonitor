import { extendTheme, ThemeConfig, ColorMode } from "@chakra-ui/react";
import { foundations } from "./foundations";
import { components } from "./components";

export const storageKey = "chakra-ui-color-mode";
let colorModeInLocalStorage;
if (typeof window !== "undefined") {
  colorModeInLocalStorage = localStorage.getItem(storageKey) as ColorMode;
}
const useSystemColorMode = !colorModeInLocalStorage;

const config: ThemeConfig = {
  useSystemColorMode,
  initialColorMode: "dark",
  cssVarPrefix: "chakra",
};

const chakraTheme = extendTheme({
  components,
  // config,
  ...foundations,
});

export default chakraTheme;
