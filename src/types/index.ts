import { COLOR_NAME, TONE_LEVEL, ELEVATION_LEVEL } from '../constants';

export type Tokens = {
  colors: Color[];
};

export type Color = {
  name: ColorName;
  hex: HEX;
  palette: Palette;
};

export type ColorName = typeof COLOR_NAME[keyof typeof COLOR_NAME];

export type Palette = Record<ToneLevel, Tone>;

export type ToneLevel = typeof TONE_LEVEL[keyof typeof TONE_LEVEL];

export type Tone = {
  hex: HEX;
  isLight: boolean;
  isDark: boolean;
};

// #000000
export type HEX = string;
export type Red = number;
export type Green = number;
export type Blue = number;
export type Alpha = number;
export type RGB = {
  r: Red;
  g: Green;
  b: Blue;
};
export type RGBA = RGB & {
  a: Alpha;
};
export type Hue = number;
export type Saturation = number;
export type Lightness = number;
export type HSL = {
  h: Hue;
  s: Saturation;
  l: Lightness;
};

export type ElevationLevel = typeof ELEVATION_LEVEL[keyof typeof ELEVATION_LEVEL];
