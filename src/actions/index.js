import axios from 'axios';

export const FETCH_QUESTIONS = 'fetch_questions';
export const FETCH_QUESTION = 'fetch_question';

const ROOT_URL = `https://qriusity.com/v1/questions`;

export function fetchQuestions(){
  let PAGE_NUMBER = Math.floor(Math.random() * 2000);
  const request = axios.get(`${ROOT_URL}?page=${PAGE_NUMBER}&limit=5`);
  // console.log("action request", request);

  return {
    type: FETCH_QUESTIONS,
    payload: request
  };
}

export function fetchQuestion(id){
  // https://qriusity.com/v1/questions/22
  // /v1/questions/:id
  const request = axios.get(`${ROOT_URL}/${id}`);

  return {
    type: FETCH_QUESTION,
    payload: request
  };
}
