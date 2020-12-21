import React from 'react'

interface IGridProps {
  classes?: string[]
}

interface IContainerProps extends IGridProps {
  fluid?: boolean
}

export const Grid: React.FC<IContainerProps> = ({ children, fluid, classes = [] }) => {
  const clazz = fluid? classes.concat('container-fluid') : classes.concat('container-fluid')
  return <div className={clazz.join(' ')} >{children}</div>
}

export const Row: React.FC<IGridProps> = ({ children, classes = [] }) => {
  return <div className={`row ${classes.join(' ')}`}>{children}</div>
}

export const Col: React.FC<IGridProps> = ({ children, classes = [] }) => {
  if (!classes.length) classes = ['col-12']
  return <div className={classes.join(' ')}>{children}</div>
}