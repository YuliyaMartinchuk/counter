import React, {FC} from 'react';
import k from "./Button.module.css"

type PropsType = {
    className?: string
    callBack: () => void
    disabled: boolean
    name: string
}

export const Button: FC<PropsType> = (props
) => {
    const {className, callBack, disabled, name, ...otherProps} = props
    const onClickHandler = () => {
        callBack()
    }

    return (
        <button
            className={`${k.button}`}
            onClick={onClickHandler}
            disabled={disabled}
        >{name}</button>
    )
}

