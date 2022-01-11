type ColorType = {
    colorMain: string
}

const initState: ColorType = {
    colorMain: ''
};

export const themeReducer = (state = initState, action: ActionType): ColorType => { // fix any
    switch (action.type) {
        case "CHANGE-COLOR": {
            return {...state,
                colorMain: action.color
            }
        }
        default: return state;
    }
};

type ActionType = ReturnType<typeof changeThemeColor>

export const changeThemeColor = (color: string): any => {
    return {
        type: 'CHANGE-COLOR',
        color
    }as const
};