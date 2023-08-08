const INITIAL_STATE = {
    loading: false,
  };
  
  const UtilReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
      case 'UTIL_INICIAL_STATE':
        //console.log('UTIL_INICIAL_STATE', action);
        return {...state, ...INITIAL_STATE};
      case 'UTIL_MODIFY_LOADING':
        //console.log('UTIL_MODIFY_LOADING', action);
        return {...state, loading: action.payload};
      default:
        return state;
    }
  };
  
  export default UtilReducer;
  