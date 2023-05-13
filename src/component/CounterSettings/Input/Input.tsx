import React, {ChangeEvent, ChangeEventHandler, FC} from 'react';

type PropsType = {
    name:string
    value:number
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
}


export const Input : FC<PropsType> = (props) => {
    const { name,value, onChange, ...otherProps} = props
    return (
        <div>
            <span> {name} </span>
            <input type={"number"}
                   value={value}
                   onChange={onChange}
            />
        </div>
    );
};

