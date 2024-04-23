import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import CategoryReducer from "./CategoryReducer";

const rootReducer = combineReducers(
    {
        PostReducer: PostReducer,
        CategoryReducer: CategoryReducer,
    }
)

export default rootReducer;