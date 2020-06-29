import axios from 'axios';

const initialState = [];

function reducer(state = initialState, action){
switch (action.type) {
  case "ADD" :
    return [...state, { id: action.payload.id, score: action.payload.score, date: action.payload.date }];

    default:
      return state;
  }
}
 
export default reducer;