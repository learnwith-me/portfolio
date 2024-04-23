import { FETCH_CAT_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_CAT_DATA_SUCCESS } from "../actions/actions"

const initialState = {
    loading: true,
    error: '',
    catData: []
}


const CategoryReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: "",
            };
        case FETCH_CAT_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                catData: action.catData,
            }
        case FETCH_CAT_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.catData,
                catData: [],
            }
        default:
            return state;
    }
}

export default CategoryReducer;

