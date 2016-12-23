import { SEARCH_TERM } from '../actions/actionTypes'

export default function reducer(state = {searchTerm: ''}, action = null) {
  switch (action.type) {
    case SEARCH_TERM :
      return Object.assign ({}, state, {searchTerm: action.term });
    default:
			return state;
  }
};
