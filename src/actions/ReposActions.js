import { REPO_REQ_DATA, REPO_RECV_DATA, REPO_RECV_ERROR } from './actionTypes'
import axios from 'axios'

function requestData() {
	return {
    type: REPO_REQ_DATA
  }
};

function receiveData(json) {
	return{
		type: REPO_RECV_DATA,
		data: json
	}
};

function receiveError(json) {
	return {
		type: REPO_RECV_ERROR,
		data: json
	}
};

export function fetchReposData() {
	return function(dispatch) {
		dispatch(requestData());
		axios.get(`https://api.github.com/users/facebook/repos`)
			.then((response) => {
				dispatch(receiveData(response.data));
			})
			.catch((response) => {
				dispatch(receiveError(response));
			})
	}
};
