const CHANGE_THEME = 'CHANGE_THEME'


export type InitStateTypeProps = {
    theme: string

}

const initState: InitStateTypeProps = {
    theme: 'some'
};

export const themeReducer = (state: InitStateTypeProps = initState, action: DispatchChangeTheme): InitStateTypeProps => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

export type DispatchChangeTheme = {
    type: 'CHANGE_THEME'
    theme: string
}

export const changeThemeAC = (theme: string): DispatchChangeTheme => ({type: CHANGE_THEME, theme}); // fix any