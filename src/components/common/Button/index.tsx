import React from 'react'

interface IProps {
    label: string;
    outlined?: boolean
}

export const Button: React.FC<IProps> = ({label, outlined}) => {
    const classes = `${outlined? 'btn-outline-success': 'btn-success '} btn mt-4 pl-4 pr-4 pt-2 pb-2`
    return (
        <button className={classes}>{label}</button>
    )
}