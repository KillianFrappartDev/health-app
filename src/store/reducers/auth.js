const initialState = {
    id: null,
    token: null,
    isAuthenticated: false
};

 
function reducer(state = initialState, action){
switch (action.type) {
  case "LOGIN" :
    return {id: action.payload.id, token: action.payload.token, isAuthenticated: true};

    default:
      return state;
  }
}
 
export default reducer;