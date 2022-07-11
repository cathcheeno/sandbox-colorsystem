import classnames from 'classnames';
import React from 'react';

export type Props = {
  label: string;
  isDisabled?: boolean;
};
const Component: React.FC<Props> = ({ label, isDisabled = false }) => {
  return (
    <button disabled={isDisabled} className={classnames('relative p-2 text-role-accent-on')}>
      <div className={classnames('absolute inset-0 rounded-role-full', {
        'shadow-role-elv-2': !isDisabled,
        'shadow-role-elv-0': isDisabled,
      })}>
        <div className={classnames('absolute inset-0 rounded-role-full bg-role-accent', {
          'opacity-100': !isDisabled,
          'opacity-50': isDisabled,
        })} />
      </div>
      <div className="relative">{label}</div>
    </button>
  );
};
export default Component;
