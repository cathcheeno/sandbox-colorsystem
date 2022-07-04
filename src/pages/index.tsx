import type { NextPage } from 'next';
import { useCallback, useState } from 'react';
import Preview from '../components/preview';
import Tokens from '../components/tokens';
import type { Props as TokensProps } from '../components/tokens';
import { COLOR_NAME } from '../constants';
import { createPalette } from '../helpers';
import type { Tokens as TokensType } from '../types';

const IndexPage: NextPage = () => {
  const [tokens, setTokens] = useState<TokensType>({
    colors: [
      {
        name: COLOR_NAME.PRIMARY,
        hex: '#FFFF00',
        palette: createPalette('#FFFF00'),
      },
      {
        name: COLOR_NAME.NEUTRAL,
        hex: '#000000',
        palette: createPalette('#000000'),
      },
      {
        name: COLOR_NAME.ERROR,
        hex: '#FF0000',
        palette: createPalette('#FF0000'),
      }
    ]
  });

  const handleTokensChange = useCallback<TokensProps['onChange']>((tokens) => {
    setTokens(tokens);
  }, []);

  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="px-4">
        <Tokens tokens={tokens} onChange={handleTokensChange} />
      </div>
      <div className="border-t-4 border-gray-300" />
      <div className="px-4">
        <Preview tokens={tokens} />
      </div>
    </div>
  );
};

export default IndexPage;
