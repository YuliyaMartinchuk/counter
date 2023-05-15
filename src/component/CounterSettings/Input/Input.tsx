import React, {ChangeEvent, FC} from 'react';
import s from "./Input.module.css";
import k from "../../Counter/Counter.module.css";

type PropsType = {
    name: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    error: string
    textError: string
}


export const Input: FC<PropsType> = (props) => {
    const {name, value, onChange, error, textError, ...otherProps} = props
    const inputClasses = error === textError
        ? `${s.input} ${s.inputError}`
        : s.input

    return (
        <div>
            <span> {name} </span>
            <input className={inputClasses}
                   type={"number"}
                   value={value}
                   onChange={onChange}
            />
        </div>
    );
};

