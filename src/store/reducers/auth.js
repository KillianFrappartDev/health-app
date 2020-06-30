const initialState = {
    id: null,
    token: null,
    isAuthenticated: false,
    name: ""
};

 
function reducer(state = initialState, action){
switch (action.type) {
  case "LOGIN":
    return {
      ...state,
      id: action.payload.id,
      token: action.payload.token,
      isAuthenticated: true
    };

  case "NAME":
    return {
      ...state,
      name: action.payload.name
    };
  default:
    return state;
}
}
 
export default reducer;