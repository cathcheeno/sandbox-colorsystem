import classnames from 'classnames';
import React, { useCallback } from 'react';
import type { Palette, Tone, ToneLevel } from '../../../types';

export type Props = {
  palette: Palette;
};
const Component: React.FC<Props> = ({ palette }) => {
  return (
    <ul className="flex">
      {Object.keys(palette).map((toneLevel) => (
        <li key={toneLevel}>
          <Item tone={palette[toneLevel]} toneLevel={toneLevel} />
        </li>
      ))}
    </ul>
  );
}
export default Component;

type ItemProps = {
  toneLevel: ToneLevel;
  tone: Tone;
};
const Item: React.FC<ItemProps> = ({ toneLevel, tone }) => {
  const handleClick = useCallback(() => {
    console.log(toneLevel, tone);
  }, [toneLevel, tone]);

  return (
    <button className="flex justify-center items-center w-8 h-8" style={{
      backgroundColor: tone.hex
    }} onClick={handleClick}>
      <div className={classnames('text-xxs', {
        'text-black': tone.isLight,
        'text-white': tone.isDark,
      })}>{toneLevel}</div>
    </button>
  );
};
