import React from 'react';

export type Props = {
  label: string;
};
const Component: React.FC<Props> = ({ label }) => {
  return (
    <button className="p-2 rounded bg-role-primary text-role-primary-on">{label}</button>
  );
};
export default Component;
