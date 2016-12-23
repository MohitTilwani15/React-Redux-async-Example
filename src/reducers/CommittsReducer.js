import { COMMITT_REQ_DATA, COMMITT_RECV_DATA, COMMITT_RECV_ERROR, HIDE_COMMITTS } from '../actions/actionTypes';

export default function reducer(state = {
	isLoading: false,
	showCommitts: false,
	data: [],
	error: false}
, action = null) {
	switch(action.type) {
		case COMMITT_RECV_ERROR:
			return Object.assign({}, state, {isLoading: false, showCommitts: false, data: action.data, error: true});
		case COMMITT_RECV_DATA:
			return Object.assign({}, state, {isLoading: false, showCommitts: true, data: action.data, error: false });
		case COMMITT_REQ_DATA:
			return Object.assign({}, state, {isLoading: true, showCommitts: false, error: false });
		case HIDE_COMMITTS:
		  return Object.assign({}, state, {isLoading: false, showCommitts: false, error: false})
		default:
			return state;
	}
};
