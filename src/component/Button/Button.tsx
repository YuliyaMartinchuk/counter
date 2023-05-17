import React, {FC, ReactNode} from 'react';
import s from "./Button.module.css"

type PropsType = {
    className?: string
    callBack: () => void
    disabled: boolean
    children: ReactNode
}

export const Button: FC<PropsType> = ({className, callBack, children, ...otherProps}
) => {
    return (
        <button
            className={`${s.button} ${className}`}
            onClick={callBack}
            {...otherProps}
        >{children}</button>
    )
}

