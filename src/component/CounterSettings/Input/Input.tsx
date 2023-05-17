import React, {ChangeEvent, FC} from 'react';
import s from "./Input.module.css";

type PropsType = {
    name: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    error: string
    textError: string

}

export const Input: FC<PropsType> = ({name, error, textError, ...otherProps}) => {
    const inputClasses = error === textError
        ? `${s.input} ${s.inputError}`
        : s.input

    return (
        <div>
            <span> {name} </span>
            <input className={inputClasses}
                   type={"number"}
                   {...otherProps}
            />
        </div>
    );
};

