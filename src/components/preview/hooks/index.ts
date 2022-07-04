import { useMemo } from 'react';
import { COLOR_NAME, TONE_LEVEL } from '../../../constants';
import { pickTone } from '../../../helpers';
import type { Tokens } from '../../../types';

export const useStyle = (tokens: Tokens): string => {
  const style = useMemo<string>(() => {
    return `
[data-mode=light] {
  --cs-light-background: ${pickTone(tokens, COLOR_NAME.NEUTRAL, TONE_LEVEL['95']).hex};
  --cs-light-background-on-high: ${pickTone(tokens, COLOR_NAME.NEUTRAL, TONE_LEVEL['10']).hex};
  --cs-light-background-on-medium: ${pickTone(tokens, COLOR_NAME.NEUTRAL, TONE_LEVEL['30']).hex};
  --cs-light-background-on-low: ${pickTone(tokens, COLOR_NAME.NEUTRAL, TONE_LEVEL['50']).hex};
  --cs-light-surface: ${pickTone(tokens, COLOR_NAME.NEUTRAL, TONE_LEVEL['90']).hex};
  --cs-light-surface-on-high: ${pickTone(tokens, COLOR_NAME.NEUTRAL, TONE_LEVEL['10']).hex};
  --cs-light-surface-on-medium: ${pickTone(tokens, COLOR_NAME.NEUTRAL, TONE_LEVEL['30']).hex};
  --cs-light-surface-on-low: ${pickTone(tokens, COLOR_NAME.NEUTRAL, TONE_LEVEL['50']).hex};
  --cs-light-primary: ${pickTone(tokens, COLOR_NAME.PRIMARY, TONE_LEVEL['40']).hex};
  --cs-light-primary-on: ${pickTone(tokens, COLOR_NAME.PRIMARY, TONE_LEVEL['10']).hex};
}
[data-mode=dark] {
  --cs-dark-background: ${pickTone(tokens, COLOR_NAME.NEUTRAL, TONE_LEVEL['10']).hex};
  --cs-dark-background-on-high: ${pickTone(tokens, COLOR_NAME.NEUTRAL, TONE_LEVEL['90']).hex};
  --cs-dark-background-on-medium: ${pickTone(tokens, COLOR_NAME.NEUTRAL, TONE_LEVEL['70']).hex};
  --cs-dark-background-on-low: ${pickTone(tokens, COLOR_NAME.NEUTRAL, TONE_LEVEL['50']).hex};
  --cs-dark-surface: ${pickTone(tokens, COLOR_NAME.NEUTRAL, TONE_LEVEL['20']).hex};
  --cs-dark-surface-on-high: ${pickTone(tokens, COLOR_NAME.NEUTRAL, TONE_LEVEL['90']).hex};
  --cs-dark-surface-on-medium: ${pickTone(tokens, COLOR_NAME.NEUTRAL, TONE_LEVEL['70']).hex};
  --cs-dark-surface-on-low: ${pickTone(tokens, COLOR_NAME.NEUTRAL, TONE_LEVEL['50']).hex};
  --cs-dark-primary: ${pickTone(tokens, COLOR_NAME.PRIMARY, TONE_LEVEL['60']).hex};
  --cs-dark-primary-on: ${pickTone(tokens, COLOR_NAME.PRIMARY, TONE_LEVEL['10']).hex};
}`;
  }, [tokens]);

  return style;
}
