import React from 'react'

interface IProps {
  children: any
}

export const BandComponent: React.FC<IProps> = ({ children }) => {
  return <div className="bg-secondary mt-5 pt-3 pb-4">{children}</div>
}
