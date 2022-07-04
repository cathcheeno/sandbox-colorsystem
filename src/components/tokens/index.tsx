import React, { useCallback } from 'react';
import type { Tokens } from '../../types';
import Colors from './colors';
import type { Props as ColorsProps } from './colors';

export type Props = {
  tokens: Tokens;
  onChange: (tokens: Tokens) => void;
};
const Component: React.FC<Props> = ({ tokens, onChange }) => {
  const handleColorsChange = useCallback<ColorsProps['onChange']>((colors) => {
    onChange({
      ...tokens,
      colors,
    });
  }, [tokens, onChange]);

  return (
    <div>
      <Colors colors={tokens.colors} onChange={handleColorsChange} />
    </div>
  );
};
export default Component;
