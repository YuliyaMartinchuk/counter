import React, {ChangeEvent, FC} from 'react';
import {Input} from "./Input/Input";


type PropsType = {
    maxValue: number
    startValue: number
    maxValueChangeHandler: (e:ChangeEvent<HTMLInputElement>)=>void
    startValueChangeHandler: (e:ChangeEvent<HTMLInputElement>)=>void
    error:string
    textError:string
}


export const CounterSettings : FC<PropsType> = (props) => {
    const { maxValue,startValue,
        maxValueChangeHandler,
        startValueChangeHandler,
        error,
        textError,
        ...otherProps} = props
    return (
        <div >
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

