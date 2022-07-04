import React, { useCallback } from 'react';
import { createPalette } from '../../helpers';
import type { Color } from '../../types';
import Input from './input';
import type { Props as InputProps } from './input';
import Palette from './palette';

export type Props = {
  color: Color;
  onChange: (color: Color) => void;
};
const Component: React.FC<Props> = ({ color, onChange }) => {
  const handleInputChange = useCallback<InputProps['onChange']>((hex) => {
    const newColor: Color = {
      ...color,
      hex,
      palette: createPalette(hex),
    };
    onChange(newColor);
  }, [color, onChange]);

  return (
    <div>
      <Input label={color.name} hex={color.hex} onChange={handleInputChange} />
      <Palette palette={color.palette} />
    </div>
  );
};
export default Component;
