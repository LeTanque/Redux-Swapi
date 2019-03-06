import axios from 'axios';
export const FETCH_CHAR_START = 'FETCH_CHAR';
export const FETCH_CHAR_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_CHAR_FAILURE = 'FETCH_FAILURE';
// we'll need axios

export const getCharacter = () => dispatch => {
    dispatch({ type: FETCH_CHAR_START });
    axios
        .get('https://swapi.co/api/people')
        .then(response => {
            console.log(response);
            dispatch({
                type: FETCH_CHAR_SUCCESS,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
}


// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator
