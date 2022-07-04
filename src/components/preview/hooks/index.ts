import { useMemo } from 'react';
import { COLOR_NAME, TONE_LEVEL } from '../../../constants';
import { pickColor, pickTone } from '../../../helpers';
import type { Tokens, Color } from '../../../types';

/* --token-palette-{COLOR_NAME}-{TONE_LEVEL}: HEX; */
const generateTokenPalette = (color: Color): string => {
  const arr: string[] = [];
  Object.keys(color.palette).forEach((toneLevel) => {
    arr.push(`--token-palette-${color.name}-${toneLevel}: ${color.palette[toneLevel].hex};`);
  });
  return arr.join('');
};

export const useStyle = (tokens: Tokens): string => {
  const style = useMemo<string>(() => {
    const neutralColor = pickColor(tokens, COLOR_NAME.NEUTRAL);
    const primaryColor = pickColor(tokens, COLOR_NAME.PRIMARY);
    const errorColor = pickColor(tokens, COLOR_NAME.ERROR);
    return `
:root {
${generateTokenPalette(neutralColor)}
${generateTokenPalette(primaryColor)}
${generateTokenPalette(errorColor)}
}`;
  }, [tokens]);

  return style;
}
