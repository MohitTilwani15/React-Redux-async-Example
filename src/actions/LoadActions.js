import { LOAD_MORE_DATA } from './actionTypes'

export function loadMoreData() {
  return function(dispatch) {
    dispatch({
      type: LOAD_MORE_DATA
    })
  }
}
