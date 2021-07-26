import {UserType} from "../HW8";

export type SortUsersType = {
    type: 'sort'
    payload: string
}
export type CheckUsersType = {
    type: 'check'
    payload: number

}

export type ActionTypes = SortUsersType | CheckUsersType


export const homeWorkReducer = (state: Array<UserType>, action: ActionTypes): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return [...state].sort((a, b) => (action.payload === 'up' ? (a.name > b.name ? 1 : -1) : (a.name < b.name ? 1 : -1)))
        }
        case
        'check'
        : {
            return state.filter(user => user.age > action.payload && {...user})
        }
        default:
            return state
    }
}

export const sortUsersAC = (payload: string): SortUsersType => {
    return {type: "sort", payload}
}

