import {AppRootStateType} from "../store";



export const counterValueSelector = (state:AppRootStateType) => state.counter.counterValue
export const counterMaxValueSelector = (state:AppRootStateType) => state.counter.maxValue
export const counterStartValueSelector = (state:AppRootStateType) => state.counter.startValue
export const counterErrorSelector = (state:AppRootStateType) => state.counter.error