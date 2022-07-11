import { useMemo } from 'react';
import { COLOR_NAME, TONE_LEVEL } from '../../../constants';
import { pickColor, pickTone } from '../../../helpers';
import type { Tokens, Color } from '../../../types';

/* --token-color-{COLOR_NAME}-{TONE_LEVEL}: HEX; */
const generateTokenPalette = (color: Color): string => {
  const arr: string[] = [];
  Object.keys(color.palette).forEach((toneLevel) => {
    arr.push(`--token-color-${color.name}-${toneLevel}: ${color.palette[toneLevel].hex};`);
  });
  return arr.join('');
};

export const useStyle = (tokens: Tokens): string => {
  const style = useMemo<string>(() => {
    const neutralColor = pickColor(tokens, COLOR_NAME.NEUTRAL);
    const accentColor = pickColor(tokens, COLOR_NAME.ACCENT);
    const errorColor = pickColor(tokens, COLOR_NAME.ERROR);
    return `
:root {
${generateTokenPalette(neutralColor)}
${generateTokenPalette(accentColor)}
${generateTokenPalette(errorColor)}
}`;
  }, [tokens]);

  return style;
}
