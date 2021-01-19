import React from 'react';

type TProps = {
    width?: number
    height?: number
}

export const Spinner: React.FC<TProps> = () => (
    <div className="spinner-border" role="status" style={{width: 70, height: 70, }}>
        <span className="sr-only">Loading...</span>
    </div>
)