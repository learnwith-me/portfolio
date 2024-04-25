import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import CategoryReducer from "./CategoryReducer";
import authenticationSlice from "../components/redux/slice/authenticationSlice";
import CoursesReducer from "./CoursesReducer";

const rootReducer = combineReducers(
    {
        PostReducer: PostReducer,
        CategoryReducer: CategoryReducer,
        CoursesReducer: CoursesReducer,
        auth: authenticationSlice,
    }
)

export default rootReducer;