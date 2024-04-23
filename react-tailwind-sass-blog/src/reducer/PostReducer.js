import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "../actions/actions"


const initialState = {
    loader: true,
    error: "",
    data: [],
}

const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loader: true,
                error: "",
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loader: false,
                error: '',
                data: action.payload,
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loader: false,
                error: action.payload,
                data: [],
            }
        default:
            return state;
    }
}

export default PostReducer;

