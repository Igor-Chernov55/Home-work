import {UserTypes} from "../HW8";


export const homeWorkReducer = (state: UserTypes[], action: HomeWorkReducerActionType): UserTypes[] => { // need to fix any
    const stateCopy = [...state]

    switch (action.type) {
        case 'sort':

             stateCopy.sort()
            if (action.payload === 'up') {
                return stateCopy
            }

           else if(action.payload === 'down'){
                return stateCopy.reverse()
            }

           return stateCopy

        case 'check':
            // need to fix
            return stateCopy.filter(f => f.age > 18)

        default: return stateCopy
    }
}

export type HomeWorkReducerActionType = SortUpACType | CheckACType  ;

type SortUpACType = {
    type: 'sort',
    payload: string
}
type CheckACType = {
    type: 'check'
    payload: string | number
}


