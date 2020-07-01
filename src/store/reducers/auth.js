const initialState = {
    id: null,
    token: null,
    isAuthenticated: false,
    name: "",
    score: 0
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

  case "DATA":
    return {
      ...state,
      name: action.payload.name,
      score: action.payload.score
    };

  case "SCORE":
    return {
      ...state,
      score: action.payload.score
    }
    
  default:
    return state;
}
}
 
export default reducer;