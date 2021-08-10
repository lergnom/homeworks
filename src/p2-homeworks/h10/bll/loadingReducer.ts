const SET_PRELOADER = "SET_PRELOADER"

export type InitStateType = {
    isActive: boolean,
}

const initState = {
    isActive: false,
}

export const loadingReducer = (state: InitStateType = initState, action: DispatchLoadingProps): InitStateType => { // fix any
    switch (action.type) {
        case SET_PRELOADER: {
            return {...state, isActive: action.isActive}
        }
        default:
            return state
    }
}

type DispatchLoadingProps = {
    type: 'SET_PRELOADER'
    isActive: boolean
}

export const loadingAC = (isActive: boolean): DispatchLoadingProps => ({type: SET_PRELOADER, isActive})