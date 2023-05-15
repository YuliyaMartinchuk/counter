import React, {ChangeEvent, ChangeEventHandler, useEffect, useState} from 'react';
import k from "./Display.module.css"
import s from "../Button/Button.module.css"
import {Counter} from "../Counter/Counter";
import {Button} from "../Button/Button";
import {CounterSettings} from "../CounterSettings/CounterSettings";



export const Display = () => {

    const [counterValue, setCounterValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [error, setError] = useState<string>("enter values and press set")

    const textError: string = "incorrect value!"



    useEffect(() => {
        let counterValueAsString = localStorage.getItem("counterValue")
        let maxValueAsString = localStorage.getItem("maxValue")
        let startValueAsString = localStorage.getItem("startValue")

            if (counterValueAsString) {setCounterValue(JSON.parse(counterValueAsString))}
            if (maxValueAsString) {setMaxValue(JSON.parse(maxValueAsString))}
            if (startValueAsString) {setStartValue(JSON.parse(startValueAsString))}
        }
        , [])

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(counterValue))
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        localStorage.setItem("startValue", JSON.stringify(startValue))
    }, [counterValue])


    const IncreaseHandler = () => {
        setCounterValue(counterValue + 1)
    }

    const ResetHandler = () => {
        setCounterValue(0)
    }

    const setHandler = () => {
        setCounterValue(startValue)
    }


    const startValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const valueAsNumber = Number(e.currentTarget.value)
        valueAsNumber >= -1 && valueAsNumber <= maxValue && setStartValue(valueAsNumber)
        if (valueAsNumber >= maxValue || valueAsNumber <= -1) {
            setError(textError)
        } else {
            setError("")
        }
    }

    const maxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const valueAsNumber = Number(e.currentTarget.value)
        valueAsNumber >= startValue && setMaxValue(valueAsNumber)
        if (valueAsNumber <= startValue || valueAsNumber <= -1) {
            setError(textError)
        } else {
            setError("")
        }

        setMaxValue(valueAsNumber)
    }

    const isSetDisabled: boolean = startValue >= maxValue || startValue < 0
    const isIncreaseDisabled: boolean = counterValue >= maxValue || !!error
    const isResetDisabled: boolean = counterValue < startValue || !!error


    return (
        <div className={` ${k.display}`}>
            <div className={` ${k.wrapper}`}>
                <CounterSettings
                    maxValue={maxValue}
                    startValue={startValue}
                    maxValueChangeHandler={maxValueChangeHandler}
                    startValueChangeHandler={startValueChangeHandler}
                    error={error}
                    textError={textError}
                />
                <div className={s.wrapperButton}>
                    <Button
                        callBack={setHandler}
                        disabled={isSetDisabled}
                        name={"set"}/>
                </div>

            </div>
            <div className={` ${k.wrapper}`}>
                <Counter maxValue={maxValue}
                         startValue={startValue}
                         counterValue={counterValue}
                         error={error}
                         textError={textError}
                />
                <div className={s.wrapperButton}>
                    <Button
                        callBack={IncreaseHandler}
                        disabled={isIncreaseDisabled}
                        name={"increment"}/>

                    <Button
                        callBack={ResetHandler}
                        disabled={isResetDisabled}
                        name={"reset"}/>
                </div>

            </div>
        </div>
    );
};



