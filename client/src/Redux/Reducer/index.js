import { combineReducers } from "redux";
import articleReducer from "./ArticleReducer"
import authReducer from "./AuthReducer";
import errorreducer from "./errorReducer"
import CommentReducer from "./CommentReducer";
const rootReducer = combineReducers({ articleReducer,authReducer, CommentReducer , errorreducer});
export default rootReducer;