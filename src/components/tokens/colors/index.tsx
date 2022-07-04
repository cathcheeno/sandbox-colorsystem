import React, { useCallback } from 'react';
import Color from '../../../components/color';
import type { Props as ColorProps } from '../../../components/color';
import type { Color as ColorType } from '../../../types';

export type Props = {
  colors: ColorType[];
  onChange: (colors: ColorType[]) => void;
};
const Component: React.FC<Props> = ({ colors, onChange }) => {
  const handleItemChange = useCallback<ItemProps['onChange']>((color) => {
    const newColors = [];
    colors.forEach(_color => {
      if (_color.name === color.name) {
        newColors.push(color);
      } else {
        newColors.push(_color);
      }
    });
    onChange(newColors);
  }, [colors, onChange]);

  return (
    <ul className="flex flex-col gap-2">
      {colors.map((color) => (
        <li key={color.name}>
          <Item color={color} onChange={handleItemChange} />
        </li>
      ))}
    </ul>
  );
};
export default Component;

type ItemProps = {
  color: ColorType;
  onChange: ColorProps['onChange'];
};
const Item: React.FC<ItemProps> = ({ color, onChange }) => {
  return (
    <Color color={color} onChange={onChange} />
  );
};
