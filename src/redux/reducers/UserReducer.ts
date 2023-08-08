const INITIAL_STATE = {
  email: '',
  password: '',
  uid: '',
  logged: false,
  selectedHero: 0,
};

const UserReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'USER_INICIAL_STATE':
      //console.log('USER_INICIAL_STATE', action);
      return {...state, ...INITIAL_STATE};
    case 'USER_MODIFY_PASS':
      //console.log('USER_MODIFY_PASS', action);
      return {...state, password: action.payload};
    case 'USER_MODIFY_EMAIL':
      //console.log('USER_MODIFY_EMAIL', action);
      return {...state, email: action.payload};
    case 'USER_MODIFY_UID':
      //console.log('USER_MODIFY_UID', action);
      return {...state, uid: action.payload};
    case 'USER_MODIFY_LOGGED':
      //console.log('USER_MODIFY_LOGGED', action);
      return {...state, logged: action.payload};
    case 'USER_MODIFY_SELECTED_HERO':
      //console.log('USER_MODIFY_SELECTED_HERO', action);
      return {...state, selectedHero: action.payload};
      
    default:
      return state;
  }
};

export default UserReducer;
