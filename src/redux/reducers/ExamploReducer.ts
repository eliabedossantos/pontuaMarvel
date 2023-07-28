const INITIAL_STATE = {
  testeRedux: 'testeRedux',
};

const ExemploReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'EXEMPLO_INICIAL_STATE':
      console.log('EXEMPLO_INICIAL_STATE', action);
      return {...state, ...INITIAL_STATE};
    case 'EXEMPLO_MODIFY_TEST':
      console.log('EXEMPLO_MODIFY_TEST', action);
      return {...state, testeRedux: action.payload};
    default:
      return state;
  }
};

export default ExemploReducer;
