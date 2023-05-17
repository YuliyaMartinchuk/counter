import React, { ChangeEventHandler, FC} from 'react';
import {Input} from "./Input/Input";
import s from "./CounterSettings.module.css"


type PropsType = {
    maxValue: number
    startValue: number
    maxValueChangeHandler: ChangeEventHandler<HTMLInputElement>
    startValueChangeHandler: ChangeEventHandler<HTMLInputElement>
    error:string
    textError:string
}

export const CounterSettings : FC<PropsType> = ({ maxValue,
                                                    startValue,
                                                    maxValueChangeHandler,
                                                    startValueChangeHandler,
                                                    error,
                                                    textError}) => {
    return (
        <div className={s.counterSettings}>
            <Input
                name={"max value:"}
                   value={maxValue}
                   onChange={maxValueChangeHandler}
                   error={error}
                   textError={textError}
            />

            <Input name={"start value:"}
                   value={startValue}
                   onChange={startValueChangeHandler}
                   error={error}
                   textError={textError}
            />
        </div>
    );
};

