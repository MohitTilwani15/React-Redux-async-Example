import { combineReducers } from 'redux'
import committs from './CommittsReducer'
import repos from './ReposReducer'
import search from './SearchReducer'
import load from './LoadReducer'

export default combineReducers({
	committs,
  repos,
	search,
	load
});
