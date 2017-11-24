import axios from 'axios';

export const FETCH_QUESTIONS = 'fetch_questions';

const ROOT_URL = `https://qriusity.com/v1/questions?page=`;
  // let rootURL = `https://qriusity.com/v1/questions?page=#{pageNumber}&limit=5`;


export function fetchQuestions(){
  let PAGE_NUMBER = Math.floor(Math.random() * 2000);
  const request = axios.get(`${ROOT_URL}${PAGE_NUMBER}&limit=5`);
  console.log(request);

  return {
    type: FETCH_QUESTIONS,
    payload: request
  };
}
