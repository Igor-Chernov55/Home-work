const initState = {
    loading: false
}
export type LoadingType = {
    loading: boolean
}

export const loadingReducer = (state: LoadingType = initState, action: ActionType): any => { // fix any
    switch (action.type) {
        case 'LOADING-TRUE': {
            return {...state, loading: true }
        }

        case 'LOADING-FALSE': {
            return {...state, loading: false}
        }
        default: return state
    }
}

type ActionType =
    | ReturnType<typeof loadingACTrue>
    | ReturnType<typeof loadingACFalse>

export const loadingACTrue = () => {
    return {
        type: 'LOADING-TRUE'
    }as const
}
export const loadingACFalse = () => {
    return {
        type: 'LOADING-FALSE'
    }as const
}