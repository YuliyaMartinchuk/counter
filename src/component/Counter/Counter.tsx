import React from 'react';
import k from "./Counter.module.css";

type PropsType = {
    title: string
    counter: number
}

const Counter = (props: PropsType) => {

    const MaxCounterWarning =

        props.counter >= 5
            ? `${k.counterText} ${k.counterTextMax}`
            : k.counterText

    return (
        <div className={k.counter} >
            <div>
                <span className={MaxCounterWarning}>{props.counter}</span>
            </div>
        </div>
    );
};

export default Counter;