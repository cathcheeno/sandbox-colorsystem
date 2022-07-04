import React, { useCallback, useMemo } from 'react';
import { HEX } from '../../../types';

export type Props = {
  label: string;
  hex: HEX;
  onChange: (hex: HEX) => void;
};
const Component: React.FC<Props> = ({ label, hex, onChange }) => {
  const id = useMemo<string>(() => {
    return `Math.random()`;
  }, []);

  const handleChange = useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>((e) => {
    const { value } = e.currentTarget;
    onChange(value);
  }, [onChange]);

  return (
    <div className="flex gap-2 items-center justify-end w-[112px]">
      <label className="text-xxs font-bold" htmlFor={id}>{label}</label>
      <input className="" id={id} type="color" value={hex} onChange={handleChange} />
    </div>
  );
};

export default Component;
