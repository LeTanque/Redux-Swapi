import { 
  FETCH_CHAR_START, 
  FETCH_CHAR_SUCCESS,
  FETCH_CHAR_FAILURE
} from "../actions";
/* we need our action types here*/ 


const initialState = {
  characters: [],
  error: '',
  fetching: false
  // Array characters, Boolean fetching, null error.
};

// Fill me in with the important reducers
// action types should be FETCHING, SUCCESS and FAILURE
// your switch statement should handle all of these cases.
export const charsReducer = (state = initialState, action) => {
  console.log('Reducer', action);  
  switch (action.type) {
    case FETCH_CHAR_START:
      return {
        ...state,
        fetching: true,
      }
    case FETCH_CHAR_SUCCESS: 
      return {
        ...state,
        fetching: false,
      }
    default:
      return state;
  }
};

