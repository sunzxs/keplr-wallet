import { createStyleProvider } from "./builder";
import { EnumFontWeight, EnumTextTransform } from "./builder/types";

export * from "./layout";
export * from "./font";
export * from "./common";
export * from "./flex";
export * from "./border";
export * from "./colors";

export const { StyleProvider, useStyle } = createStyleProvider({
  custom: {
    h1: {
      fontSize: 32,
      lineHeight: 56,
      color: "black",
      fontWeight: "700" as EnumFontWeight,
    },
    h2: {
      fontSize: 28,
      lineHeight: 36,
      color: "black",
      fontWeight: "700" as EnumFontWeight,
    },
    h3: {
      fontSize: 24,
      lineHeight: 26,
      color: "black",
      fontWeight: "600" as EnumFontWeight,
      letterSpacing: 0.18,
    },
    h4: {
      fontSize: 20,
      lineHeight: 22,
      color: "black",
      fontWeight: "600" as EnumFontWeight,
      letterSpacing: 0.5,
    },
    h5: {
      fontSize: 18,
      lineHeight: 20,
      color: "black",
      fontWeight: "600" as EnumFontWeight,
      letterSpacing: 0.65,
    },
    h6: {
      fontSize: 16,
      lineHeight: 20,
      color: "black",
      fontWeight: "600" as EnumFontWeight,
      letterSpacing: 0.6,
    },
    h7: {
      fontSize: 14,
      lineHeight: 18,
      color: "black",
      fontWeight: "600" as EnumFontWeight,
      letterSpacing: 0.4,
    },
    subtitle1: {
      fontSize: 18,
      lineHeight: 22,
      color: "black",
      fontWeight: "500" as EnumFontWeight,
    },
    subtitle2: {
      fontSize: 16,
      lineHeight: 21,
      color: "black",
      fontWeight: "500" as EnumFontWeight,
      letterSpacing: 0.3,
    },
    body1: {
      fontSize: 18,
      lineHeight: 24,
      color: "black",
      fontWeight: "400" as EnumFontWeight,
    },
    body2: {
      fontSize: 16,
      lineHeight: 22,
      color: "black",
      fontWeight: "400" as EnumFontWeight,
      letterSpacing: 0.25,
    },
    body3: {
      fontSize: 14,
      lineHeight: 20,
      color: "black",
      fontWeight: "400" as EnumFontWeight,
      letterSpacing: 0.4,
    },
    "text-button1": {
      fontSize: 18,
      lineHeight: 20,
      color: "black",
      fontWeight: "500" as EnumFontWeight,
      letterSpacing: 0.2,
      textTransform: "capitalize" as EnumTextTransform,
    },
    "text-button2": {
      fontSize: 16,
      lineHeight: 19,
      color: "black",
      fontWeight: "500" as EnumFontWeight,
      letterSpacing: 0.2,
      textTransform: "capitalize" as EnumTextTransform,
    },
    "text-button3": {
      fontSize: 14,
      lineHeight: 18,
      color: "black",
      fontWeight: "500" as EnumFontWeight,
      letterSpacing: 0.2,
      textTransform: "capitalize" as EnumTextTransform,
    },
    "text-caption1": {
      fontSize: 13,
      lineHeight: 18,
      color: "black",
      fontWeight: "400" as EnumFontWeight,
      letterSpacing: 0.4,
    },
    "text-caption2": {
      fontSize: 12,
      lineHeight: 18,
      color: "black",
      fontWeight: "400" as EnumFontWeight,
      letterSpacing: 0.4,
    },
    "text-overline": {
      fontSize: 11,
      lineHeight: 16,
      color: "black",
      fontWeight: "400" as EnumFontWeight,
      letterSpacing: 1,
      textTransform: "uppercase" as EnumTextTransform,
    },
  },
  colors: {
    primary: "#4762E7",
    "primary-50": "#E3E7F7",
    "primary-100": "#A9B6F5",
    "primary-200": "#8E9FF2",
    "primary-300": "#7388F0",
    "primary-400": "#4762E7",
    "primary-500": "#2644DB",
    "primary-600": "#102FCB",
    "primary-700": "#0320B4",
    "primary-800": "#001A9A",
    "primary-900": "#00157D",
    secondary: "#FF63B4",
    "secondary-50": "#EDD3E8",
    "secondary-100": "#F3B1E1",
    "secondary-200": "#FA9DD9",
    "secondary-300": "#FF86CE",
    "secondary-400": "#FF63B4",
    "secondary-500": "#E753A8",
    "secondary-600": "#C84699",
    "secondary-700": "#A23A83",
    "secondary-800": "#762C64",
    "secondary-900": "#471D40",
    icon: "#2C4163",
    card: "rgba(255,255,255,0.9)",
    success: "#2DCE89",
    error: "#F5365C",
    "text-black-high": "#132340",
    "text-black-medium": "#2C4163",
    "text-black-low": "#83838F",
    "text-black-very-low": "#899BB6",
    "border-gray": "#C6C6CD",
    "border-white": "#F5F5F5",
    white: "#fff",
    black: "#000",
    divider: "#F5F5F5",
  },
  paddingSizes: {
    "2": 2,
    "4": 4,
    "6": 6,
    "8": 8,
    "12": 12,
    "16": 16,
    "32": 32,
    "64": 64,
  },
  marginSizes: {
    "2": 2,
    "4": 4,
    "6": 6,
    "8": 8,
    "12": 12,
    "16": 16,
    "32": 32,
    "64": 64,
  },
  borderWidths: {},
  borderRadiuses: {},
  opacities: {
    "10": 0.1,
    "20": 0.2,
    "30": 0.3,
    "40": 0.4,
    "50": 0.5,
    "60": 0.6,
    "70": 0.7,
    "80": 0.8,
    "90": 0.9,
    "100": 1,
  },
});