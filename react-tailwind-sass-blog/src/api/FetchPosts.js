import {
    FETCH_DATA_FAILURE,
    FETCH_DATA_SUCCESS,
} from "../actions/actions";

// post Data
export const FetchPosts = (url) => async (dispatch) => {
    try {

        const response = await fetch(`${process.env.REACT_APP_API_ROOT}/${url}`);
        const postData = await response.json();
        dispatch(
            {
                type: FETCH_DATA_SUCCESS,
                payload: postData,
            }
        )

    } catch (error) {
        dispatch(
            {
                type: FETCH_DATA_FAILURE,
                payload: error.message,
            }
        )
    }
}
// post Data
