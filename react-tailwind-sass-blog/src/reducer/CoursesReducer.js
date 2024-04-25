import { FETCH_COURSE_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_COURSE_DATA_SUCCESS } from "../actions/actions"

const initialState = {
    loading: true,
    error: '',
    courseData: []
}


const CoursesReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: "",
            };
        case FETCH_COURSE_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                courseData: action.payload,
            }
        case FETCH_COURSE_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                courseData: [],
            }
        default:
            return state;
    }
}

export default CoursesReducer;

