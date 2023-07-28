const INITIAL_STATE = {
  name: '',
  email: '',
  token: '',
  uid: '',
  logged: false,
};

const UserReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'USER_INICIAL_STATE':
      console.log('USER_INICIAL_STATE', action);
      return {...state, ...INITIAL_STATE};
    case 'USER_MODIFY_NAME':
      console.log('USER_MODIFY_NAME', action);
      return {...state, name: action.payload};
    case 'USER_MODIFY_EMAIL':
      console.log('USER_MODIFY_EMAIL', action);
      return {...state, email: action.payload};
    case 'USER_MODIFY_TOKEN':
      console.log('USER_MODIFY_TOKEN', action);
      return {...state, token: action.payload};
    case 'USER_MODIFY_UID':
      console.log('USER_MODIFY_UID', action);
      return {...state, uid: action.payload};
   
    default:
      return state;
  }
};

export default UserReducer;
