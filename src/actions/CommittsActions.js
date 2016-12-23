import { COMMITT_REQ_DATA, COMMITT_RECV_DATA, COMMITT_RECV_ERROR, HIDE_COMMITTS } from './actionTypes';
import axios from 'axios'

function requestData(name) {
	return {
    type: COMMITT_REQ_DATA,
		name
  }
};

function receiveData(name, json) {
	return{
		type: COMMITT_RECV_DATA,
		data: json,
		name
	}
};

function receiveError(name, json) {
	return {
		type: COMMITT_RECV_ERROR,
		data: json,
		name
	}
};

export function goBack() {
	return {
		type: HIDE_COMMITTS
	}
};

export function fetchCommittData(name) {
	return function(dispatch) {
		dispatch(requestData(name));
		axios.get(`https://api.github.com/repos/facebook/${name}/commits`)
			.then((response) => {
				dispatch(receiveData(name, response.data));
			})
			.catch((response) => {
				dispatch(receiveError(name, response));
			})
	}
};
