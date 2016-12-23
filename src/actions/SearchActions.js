import { SEARCH_TERM } from './actionTypes'

export function dispatchSearchTerm(term) {
  return function(dispatch) {
    dispatch({
      type: SEARCH_TERM,
      term: term
    })
  }
}
