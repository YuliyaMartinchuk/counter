import React, { ChangeEventHandler} from 'react';
import k from "../../Display/Display.module.css"
import s from "../../Button/Button.module.css"
import {Counter} from "../../Counter/Counter"
import {Button} from "../../Button/Button";
import {CounterSettings} from "../../CounterSettings/CounterSettings";
import {useDispatch, useSelector} from "react-redux";
import {
    counterErrorSelector,
    counterMaxValueSelector,
    counterStartValueSelector,
    counterValueSelector
} from "../../../redux/selectors/counterSelector";
import {
    IncreaseCounterValueAC, SetCounterErrorAC, SetCounterMaxValueAC,
    SetCounterStartValueAC,
    SetCounterValueAC
} from "../../../redux/redusers/counterReducer";


export const DisplayWithRedux = () => {

    const counterValue = useSelector(counterValueSelector)
    const maxValue = useSelector(counterMaxValueSelector)
    const startValue = useSelector(counterStartValueSelector)
    const error = useSelector(counterErrorSelector)

    const dispatch = useDispatch()

    const IncreaseHandler = () => {
       dispatch(IncreaseCounterValueAC(counterValue))
    }

    const ResetHandler = () => {
        dispatch(SetCounterValueAC(startValue))
    }

    const setHandler = () => {
        dispatch(SetCounterValueAC(startValue))
    }


    const startValueChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        const valueAsNumber = e.currentTarget.valueAsNumber

        if (valueAsNumber >= -1 && valueAsNumber <= maxValue) {
            dispatch(SetCounterStartValueAC(valueAsNumber))
        }
        if (valueAsNumber >= maxValue || valueAsNumber <= -1) {
            dispatch(SetCounterErrorAC("incorrect value!"))
        } else {
            dispatch(SetCounterErrorAC(""))
        }

    }

    const maxValueChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        const valueAsNumber = e.currentTarget.valueAsNumber
        if (valueAsNumber >= startValue) {
            dispatch(SetCounterMaxValueAC(valueAsNumber))
        }
        if (valueAsNumber <= startValue || valueAsNumber <= -1) {
            dispatch(SetCounterErrorAC("incorrect value!"))
        } else {
            dispatch(SetCounterErrorAC(""))
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
                    textError={"incorrect value!"}
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
                         textError={"incorrect value!"}
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




