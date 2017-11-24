import axios from 'axios';

export const FETCH_QUESTION = 'fetch_question';

const ROOT_URL = 'http://jservice.io/api/';

export function fetchQuestion(){
  const request = axios.get(`${ROOT_URL}random`);

  return {
    type: FETCH_QUESTION,
    payload: request
  };
}
