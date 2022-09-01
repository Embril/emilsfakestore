import processedRequest from "./handleActions";

import {combineReducers} from "redux"

const rootReducers = combineReducers( {
    handleActions: processedRequest,
}); export default rootReducers;