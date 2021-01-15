import React from 'react';

type TProps = {
    type?: string
    ariaDescribedby?: string
    classes?: string[]
    id?: string[]
    placeholder?: string
    name: string
}

export function Input({type = "text", ariaDescribedby = "", classes = [], id = [], placeholder = "", name}: TProps) {
    return (
        <input type={type} className={`form-control ${classes.join(' ')}`} id={id.join(' ')} placeholder={placeholder}
               name={name} aria-describedby={ariaDescribedby}/>
    )
}