const initialState = [];

function reducer(state = initialState, action){
switch (action.type) {
  case "SET" :
    return action.payload.daysArray;

  case "ADD" :
    return [...state, { id: action.payload.id, score: action.payload.score, date: action.payload.date }];

    default:
      return state;
  }
}
 
export default reducer;