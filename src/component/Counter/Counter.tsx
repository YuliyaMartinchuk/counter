import React, {FC} from 'react';
import s from "./Counter.module.css";

type PropsType = {
    startValue:number
    maxValue:number
    counterValue: number
    error: string
    textError: string

}

export const Counter: FC<PropsType> = ({maxValue,counterValue, error}) => {
    const counterWarning =
        error
            ? s.counterErrorText
            : counterValue >= maxValue
                ? `${s.counterText} ${s.counterTextMax}`
                : s.counterText

    return (

        <div className={s.counter}>
                {error
                    ? <span className={counterWarning}> {error}</span>
                    : <span className={counterWarning}>{counterValue}</span>}
        </div>
    );
};

