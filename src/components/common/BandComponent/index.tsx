import React from "react";

interface IProps {
  children: any;
  classes?: string[];
}

export const BandComponent: React.FC<IProps> = ({ children, classes = [] }) => {
  const newClasses = `${classes.join(' ')} bg-secondary pt-3 pb-4` 
  return <div className={newClasses}>{children}</div>;
};
