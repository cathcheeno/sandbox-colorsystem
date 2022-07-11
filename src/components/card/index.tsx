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
    <div className={classnames('relative p-2 rounded bg-role-surface text-role-surface-on-medium', {
      'shadow-role-elv-0': elevationLevel === ELEVATION_LEVEL['0'],
      'shadow-role-elv-1': elevationLevel === ELEVATION_LEVEL['1'],
      'shadow-role-elv-2': elevationLevel === ELEVATION_LEVEL['2'],
      'shadow-role-elv-3': elevationLevel === ELEVATION_LEVEL['3'],
      'shadow-role-elv-4': elevationLevel === ELEVATION_LEVEL['4'],
      'shadow-role-elv-5': elevationLevel === ELEVATION_LEVEL['5'],
    })}>
      <div className={classnames('absolute inset-0 bg-role-accent', {
        'opacity-role-elv-0': elevationLevel === ELEVATION_LEVEL['0'],
        'opacity-role-elv-1': elevationLevel === ELEVATION_LEVEL['1'],
        'opacity-role-elv-2': elevationLevel === ELEVATION_LEVEL['2'],
        'opacity-role-elv-3': elevationLevel === ELEVATION_LEVEL['3'],
        'opacity-role-elv-4': elevationLevel === ELEVATION_LEVEL['4'],
        'opacity-role-elv-5': elevationLevel === ELEVATION_LEVEL['5'],
      })} />
      <div className="relative">{children}</div>
    </div>
  );
};
export default Component;
