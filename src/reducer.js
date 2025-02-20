import { combineReducers } from 'redux'

import postsReducer from './features/posts/postsSlice'
import filtersReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
    // Define a top-level state field named `posts`, handled by `postsReducer`
    // Define a top-level UI filters handled by `filtersReducer`
    posts: postsReducer,
    filters: filtersReducer
})

/*
combineReducers accepts an object where the key names will
become the keys in your root state object, and the values are
the slice reducer functions that know how to update those 
slices of the Redux state.

Remember, the key names you give to combineReducers decides 
what the key names of your state object will be!
*/
export default rootReducer;

