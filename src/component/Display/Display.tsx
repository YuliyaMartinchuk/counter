import React, {useState} from 'react';
import k from "./Display.module.css"
import s from "./Button.module.css"

import Counter from "./Counter";
import {Button} from "./Button";


export const Display = () => {

    const DisplayTitle: string = "Counter"
    const [counter, setCounter] = useState(0)

    const IncreaseHandler = () => {
        setCounter(counter+1)
    }
    const ResetHandler = () => {
        setCounter(0)
    }

    const isIncreaseDisabled: boolean = counter >= 5
    const isResetDisabled: boolean = !counter

    return (
        <div className={ ` ${k.display}`}>
            <Counter title={DisplayTitle}
                     counter={counter}/>

            <div className={s.wrapperButton}>
                <Button
                    callBack={IncreaseHandler}
                    disabled={isIncreaseDisabled}
                    name={"increase"}/>

                <Button
                    callBack={ResetHandler}
                    disabled={isResetDisabled}
                    name={"reset"}/>
            </div>

        </div>
    );
};

export default Display;

