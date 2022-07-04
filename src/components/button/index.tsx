import React from 'react';

export type Props = {
  label: string;
};
const Component: React.FC<Props> = ({ label }) => {
  return (
    <button className="p-2 rounded bg-cs-primary text-cs-primary-on">{label}</button>
  );
};
export default Component;
