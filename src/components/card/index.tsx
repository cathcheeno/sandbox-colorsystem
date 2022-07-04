import classnames from 'classnames';
import React from 'react';
import { ELEVATION_LEVEL } from '../../constants';
import type { ElevationLevel } from '../../types';

export type Props = {
  elevationLevel: ElevationLevel;
  children: React.ReactNode;
};
const Component: React.FC<Props> = ({ elevationLevel, children }) => {
  return (
    <div className={classnames('relative p-2 rounded bg-cs-surface text-cs-surface-on-medium', {
      'shadow-cs-elv-0': elevationLevel === ELEVATION_LEVEL['0'],
      'shadow-cs-elv-1': elevationLevel === ELEVATION_LEVEL['1'],
      'shadow-cs-elv-2': elevationLevel === ELEVATION_LEVEL['2'],
      'shadow-cs-elv-3': elevationLevel === ELEVATION_LEVEL['3'],
      'shadow-cs-elv-4': elevationLevel === ELEVATION_LEVEL['4'],
      'shadow-cs-elv-5': elevationLevel === ELEVATION_LEVEL['5'],
    })}>
      <div className={classnames('absolute inset-0 bg-cs-primary', {
        'opacity-cs-elv-0': elevationLevel === ELEVATION_LEVEL['0'],
        'opacity-cs-elv-1': elevationLevel === ELEVATION_LEVEL['1'],
        'opacity-cs-elv-2': elevationLevel === ELEVATION_LEVEL['2'],
        'opacity-cs-elv-3': elevationLevel === ELEVATION_LEVEL['3'],
        'opacity-cs-elv-4': elevationLevel === ELEVATION_LEVEL['4'],
        'opacity-cs-elv-5': elevationLevel === ELEVATION_LEVEL['5'],
      })} />
      <div className="relative">{children}</div>
    </div>
  );
};
export default Component;
