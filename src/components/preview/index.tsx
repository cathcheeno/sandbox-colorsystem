import React from 'react';
import Button from '../../components/button';
import Card from '../../components/card';
import { ELEVATION_LEVEL } from '../../constants';
import type { Tokens } from '../../types';
import { useStyle } from './hooks';

export type Props = {
  tokens: Tokens;
};
const Component: React.FC<Props> = ({ tokens }) => {
  const style = useStyle(tokens);

  return (
    <>
      <style>{style}</style>
      <div className="flex gap-2 p-2">
        <div className="flex-1">
          <div className="font-bold">Light Mode</div>
          <div data-mode="light">
            <Item />
          </div>
        </div>
        <div className="flex-1">
          <div className="font-bold">Dark Mode</div>
          <div data-mode="dark">
            <Item />
          </div>
        </div>
      </div>
    </>
  );
};
export default Component;

type ItemProps = {
};
const Item: React.FC<ItemProps> = () => {
  return (
    <div className="p-4 flex flex-col gap-2 bg-cs-background">
      <div className="text-cs-background-on-high">background-on-high</div>
      <div className="text-cs-background-on-medium">background-on-medium</div>
      <div className="text-cs-background-on-low">background-on-low</div>
      <Button label="Button" />
      {Object.values(ELEVATION_LEVEL).map((elevationLevel) => (
        <React.Fragment key={elevationLevel}>
          <Card elevationLevel={elevationLevel}>
            <p>Card (elevation {elevationLevel})</p>
          </Card>
        </React.Fragment>
      ))}
    </div>
  );
};
