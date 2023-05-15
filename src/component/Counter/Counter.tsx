import React, {FC} from 'react';
import k from "./Counter.module.css";
import s from "../Button/Button.module.css";
import {Button} from "../Button/Button";


type PropsType = {
    startValue:number
    maxValue:number
    counterValue: number
    error: string
    textError: string

}

export const Counter: FC<PropsType> = (props
) => {
    const {maxValue,counterValue, error, textError, ...otherProps} = props

    const counterWarning =
        error
            ? k.counterErrorText
            : counterValue >= maxValue
                ? `${k.counterText} ${k.counterTextMax}`
                : k.counterText


    return (

        <div className={k.counter}>

            <div>
                {props.error
                    ? <span className={counterWarning}> {error}</span>
                    : <span className={counterWarning}>{counterValue}</span>}
            </div>
        </div>
    );
};

