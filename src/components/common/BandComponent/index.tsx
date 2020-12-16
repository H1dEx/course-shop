import React from 'react';

interface IProps {
    title?: string;
    children: any
}

export const BandComponent: React.FC<IProps> = ({title, children}) => {

    return (
        <div className="bg-secondary mt-5 pt-3 pb-4">
            {title && <h2 className="text-center text-light">{title}</h2>}
            {children}
        </div>
    )
}