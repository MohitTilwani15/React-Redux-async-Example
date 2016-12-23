import { LOAD_MORE_DATA } from '../actions/actionTypes'

export default function reducer(state = { loadMoreData: false }, action = null) {
  switch (action.type) {
    case LOAD_MORE_DATA:
      return Object.assign({}, state, { loadMoreData: true });
    default:
      return state;
  }
}
