import axios from 'axios';
export const FETCH_CHAR_START = 'FETCH_CHAR_START';
export const FETCH_CHAR_SUCCESS = 'FETCH_CHAR_SUCCESS';
export const FETCH_CHAR_FAILURE = 'FETCH_CHAR_FAILURE';
// we'll need axios


export const getCharacters = () => dispatch => {
    dispatch({ 
        type: FETCH_CHAR_START 
    });
    axios
        .get(
            'https://swapi.co/api/people/'
        )
        .then(response => {
            console.log('Action Response console:', response.data.results);
            dispatch({
                type: FETCH_CHAR_SUCCESS,
                payload: response.data.results,
            })
        })
        .catch(error => {
            // console.log('Error console:', error);
            dispatch({
                type: FETCH_CHAR_FAILURE,
                payload: error.message,
            })
        })
}


// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator
