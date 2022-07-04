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
    <div>
      <div>Design System</div>
      <div>
        <div>Tokens</div>
        <div>
          <Tokens tokens={tokens} onChange={handleTokensChange} />
        </div>
      </div>
      <div>
        <div>Preview</div>
        <div>
          <Preview tokens={tokens} />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
