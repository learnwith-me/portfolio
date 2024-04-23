import { combineReducers } from "redux";
import PostReducer from "./PostReducer";

const rootReducer = combineReducers(
    {
        PostReducer: PostReducer,
    }
)

export default rootReducer;