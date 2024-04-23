import {
    FETCH_CAT_DATA_SUCCESS,
    FETCH_CAT_DATA_FAILURE,
} from "../actions/actions";


// Category Data
export const FetchCategoriesData = (url) => async (dispatch) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_ROOT_CATEGORY}/${url}`);
        const categoryData = await response.json();
        dispatch(
            {
                type: FETCH_CAT_DATA_SUCCESS,
                catData: categoryData,
            }
        )
    } catch (error) {
        dispatch(
            {
                type: FETCH_CAT_DATA_FAILURE,
                catData: error.message,
            }
        )
    }
}
// Category Data