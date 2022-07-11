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
      <div className="flex gap-4">
        <div className="flex-1" data-mode="light">
          <Item label="Light Mode" />
        </div>
        <div className="flex-1" data-mode="dark">
          <Item label="Dark Mode" />
        </div>
      </div>
    </>
  );
};
export default Component;

type ItemProps = {
  label: string;
};
const Item: React.FC<ItemProps> = ({ label }) => {
  return (
    <div className="rounded border border-gray-500 font-role-general">
      <div className="flex items-center gap-1 px-4 py-2 border-b border-gray-500">
        <div className="w-2 h-2 rounded-full bg-gray-500" />
        <div className="w-2 h-2 rounded-full bg-gray-500" />
        <div className="w-2 h-2 rounded-full bg-gray-500" />
        <div className="flex-1 text-center font-bold text-gray-500">{label}</div>
      </div>
      <div className="p-4 flex flex-col gap-2 bg-role-background">
        <div className="text-role-background-on-high">background-on-high</div>
        <div className="text-role-background-on-medium">background-on-medium</div>
        <div className="text-role-background-on-low">background-on-low</div>
        <Button label="Enabled" />
        <Button label="Disabled" isDisabled={true} />
        {Object.values(ELEVATION_LEVEL).map((elevationLevel) => (
          <React.Fragment key={elevationLevel}>
            <Card elevationLevel={elevationLevel}>
              <p>Card (elevation {elevationLevel})</p>
            </Card>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
