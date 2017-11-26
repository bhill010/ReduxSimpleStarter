import axios from 'axios';

export const FETCH_QUESTIONS = 'fetch_questions';
export const FETCH_QUESTION = 'fetch_question';
export const DELETE_QUESTION = 'delete_question';

const ROOT_URL = `https://qriusity.com/v1/questions`;
const PAGE_NUMBER = Math.floor(Math.random() * 2000);

export function fetchQuestions(pageNumber = PAGE_NUMBER){
  const request = axios.get(`${ROOT_URL}?page=${pageNumber}&limit=5`);
  console.log("action request fetching...", request);

  return {
    type: FETCH_QUESTIONS,
    payload: request
  };
}

export function fetchQuestion(id){
  // https://qriusity.com/v1/questions/22
  // /v1/questions/:id
  const request = axios.get(`${ROOT_URL}/${id}`);
  // console.log("action request:", request);

  return {
    type: FETCH_QUESTION,
    payload: request
  };
}

export function deleteQuestion(id) {
  return {
    type: DELETE_QUESTION,
    payload: id
  };
}
