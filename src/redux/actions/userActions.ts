import { modifyInputs } from ".";

export const handleEmail = (text: string, dispatch: any) => {
    if(text.length  > 128){
        return false;
    } else {
        dispatch(modifyInputs(text, 'USER_MODIFY_EMAIL'));
    }
}

export const handlePassword = (text: string, dispatch: any) => {
    if(text.length  > 128){
        return false;
    } else {
        dispatch(modifyInputs(text, 'USER_MODIFY_PASS'));
    }
}

export const selectHero = (hero: number, dispatch: any) => {
    dispatch(modifyInputs(hero, 'USER_MODIFY_SELECTED_HERO'));
}



