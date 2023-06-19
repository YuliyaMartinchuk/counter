import {INITIAL_TEXT} from "../../constants/constants";

type initialStateType = {
    counterValue: number,
    maxValue: number,
    startValue: number,
    error: string
}

const initialState = {
    counterValue: 0,
    maxValue: 3,
    startValue: 0,
    error: INITIAL_TEXT
}

export const counterReducer = (state = initialState, action: CounterActionsType): initialStateType => {
    switch (action.type) {
        case "INCREASE-VALUE": {
            return {
                ...state,
                counterValue: action.payload.counterValue + 1
            }
        }

        case "SET-VALUE": {
            return {
                ...state,
                counterValue: action.payload.startValue
            }
        }
        case "SET-START-VALUE": {
            return {
                ...state,
                startValue: action.payload.startValue
            }
        }
        case "SET-MAX-VALUE": {
            return {
                ...state,
                maxValue: action.payload.maxValue
            }
        }
        case "SET-ERROR":{
            return {
                ...state,
                error: action.payload.error
            }
        }
        default:
            return state

    }
}


type CounterActionsType =
    IncreaseCounterValuerACType
    | SetCounterValueACType
    | SetCounterStartValueACType
    | SetCounterMaxValueACType
    | SetCounterErrorACType

type IncreaseCounterValuerACType = ReturnType<typeof IncreaseCounterValueAC>

export const IncreaseCounterValueAC = (counterValue: number) => {
    return {
        type: "INCREASE-VALUE",
        payload: {
            counterValue
        }
    } as const
}

type SetCounterValueACType = ReturnType<typeof SetCounterValueAC>

export const SetCounterValueAC = (startValue: number) => {
    return {
        type: "SET-VALUE",
        payload: {
            startValue
        }
    } as const
}

type SetCounterStartValueACType = ReturnType<typeof SetCounterStartValueAC>

export const SetCounterStartValueAC = (startValue: number) => {
    return {
        type: "SET-START-VALUE",
        payload: {
            startValue
        }
    } as const
}

type SetCounterMaxValueACType = ReturnType<typeof SetCounterMaxValueAC>

export const SetCounterMaxValueAC = (maxValue: number) => {
    return {
        type: "SET-MAX-VALUE",
        payload: {
            maxValue
        }
    } as const
}

type SetCounterErrorACType = ReturnType<typeof SetCounterErrorAC>
type errorType = "incorrect value!" | "enter values and press set" | ""

export const SetCounterErrorAC = (error: errorType) => {
    return {
        type: "SET-ERROR",
        payload: {
            error
        }
    } as const
}

