import { REPO_REQ_DATA, REPO_RECV_DATA, REPO_RECV_ERROR } from '../actions/actionTypes';

export default function reducer(state = {
	isLoading: false,
	data: [],
	error: false}
, action = null) {
	switch(action.type) {
		case REPO_RECV_ERROR:
			return Object.assign({}, state, {isLoading: false, data: action.data, error: true});
		case REPO_RECV_DATA:
			return Object.assign({}, state, {isLoading: false, data: action.data, error: false });
		case REPO_REQ_DATA:
			return Object.assign({}, state, {isLoading: true, error: false });
		default:
			return state;
	}
};
