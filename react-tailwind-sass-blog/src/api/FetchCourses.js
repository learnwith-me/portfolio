import {
    FETCH_COURSE_DATA_FAILURE,
    FETCH_COURSE_DATA_SUCCESS,
} from "../actions/actions";

// post Data
export const FetchCourses = (url) => async (dispatch) => {
    try {

        const response = await fetch(`${process.env.REACT_APP_API_ROOT}/${url}`);
        const courseData = await response.json();
        dispatch(
            {
                type: FETCH_COURSE_DATA_SUCCESS,
                payload: courseData,
            }
        )

    } catch (error) {
        dispatch(
            {
                type: FETCH_COURSE_DATA_FAILURE,
                payload: error.message,
            }
        )
    }
}
// post Data
