import Color from 'color';
import { COLOR_NAME, TONE_LEVEL } from '../constants';
import type { HEX, Tokens, Color as ColorType, ColorName, Palette, ToneLevel, Tone } from '../types';

export const createPalette = (hex: HEX): Palette => {
  const palette: Palette = {};
  Object.values(TONE_LEVEL).forEach((toneLevel) => {
    palette[toneLevel] = createTone(hex, toneLevel);
  });
  return palette;
};

export const createTone = (hex: HEX, level: ToneLevel): Tone => {
  const c = Color(hex).lightness(Number(level));
  return {
    hex: c.hex(),
    isLight: c.isLight(),
    isDark: c.isDark(),
  };
};

export const pickColor = (tokens: Tokens, colorName: ColorName): ColorType => {
  const color = tokens.colors.find((color) => (color.name === colorName));
  return color;
};

export const pickTone = (tokens: Tokens, colorName: ColorName, toneLevel: ToneLevel): Tone => {
  const color = pickColor(tokens, colorName);
  const tone = color.palette[toneLevel];
  return tone;
};
