import React, { ChangeEventHandler, useEffect, useState} from 'react';
import k from "./Display.module.css"
import s from "../Button/Button.module.css"
import {Counter} from "../Counter/Counter";
import {Button} from "../Button/Button";
import {CounterSettings} from "../CounterSettings/CounterSettings";
import {TEXT_ERROR} from "../../constants/constants";

export const Display = () => {

    const [counterValue, setCounterValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [error, setError] = useState<string>("enter values and press set")

    useEffect(() => {
            let counterValueAsString = localStorage.getItem("counterValue")
            let maxValueAsString = localStorage.getItem("maxValue")
            let startValueAsString = localStorage.getItem("startValue")

            if (counterValueAsString) {
                setCounterValue(JSON.parse(counterValueAsString))
            }
            if (maxValueAsString) {
                setMaxValue(JSON.parse(maxValueAsString))
            }
            if (startValueAsString) {
                setStartValue(JSON.parse(startValueAsString))
            }
        }
        , [])

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(counterValue))
    }, [counterValue])


    const IncreaseHandler = () => {
        setCounterValue(prevState => prevState + 1)
    }

    const ResetHandler = () => {
        setCounterValue(0)
    }

    const setHandler = () => {
        setCounterValue(startValue)
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        localStorage.setItem("startValue", JSON.stringify(startValue))
    }


    const startValueChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        const valueAsNumber = e.currentTarget.valueAsNumber

        if (valueAsNumber >= -1 && valueAsNumber <= maxValue) {
            setStartValue(valueAsNumber)
        }
        if (valueAsNumber >= maxValue || valueAsNumber <= -1) {
            setError(TEXT_ERROR)
        } else {
            setError("")
        }

    }

    const maxValueChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        const valueAsNumber = e.currentTarget.valueAsNumber
        if (valueAsNumber >= startValue) {
            setMaxValue(valueAsNumber)
        }
        if (valueAsNumber <= startValue || valueAsNumber <= -1) {
            setError(TEXT_ERROR)
        } else {
            setError("")
        }
    }

      return (
        <div className={k.display}>
            <div className={k.wrapper}>
                <CounterSettings
                    maxValue={maxValue}
                    startValue={startValue}
                    maxValueChangeHandler={maxValueChangeHandler}
                    startValueChangeHandler={startValueChangeHandler}
                    error={error}
                    textError={TEXT_ERROR}
                />
                <div className={s.wrapperButton}>
                    <Button
                        callBack={setHandler}
                        disabled={startValue >= maxValue || startValue < 0}
                    >set</Button>
                </div>

            </div>
            <div className={k.wrapper}>
                <Counter maxValue={maxValue}
                         startValue={startValue}
                         counterValue={counterValue}
                         error={error}
                         textError={TEXT_ERROR}
                />
                <div className={s.wrapperButton}>

                    <Button
                        callBack={IncreaseHandler}
                        disabled={counterValue >= maxValue || !!error}
                    >increment</Button>

                    <Button
                        callBack={ResetHandler}
                        disabled={counterValue < startValue || !!error}
                    >reset</Button>
                </div>

            </div>
        </div>
    );
};




