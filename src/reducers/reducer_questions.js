import _ from 'lodash';
import { FETCH_QUESTIONS, FETCH_QUESTION, DELETE_QUESTION } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_QUESTION:
    // console.log("reducer data", action.payload.data);
      return { ...state, [ action.payload.data.id]: action.payload.data }
    case FETCH_QUESTIONS:
      // console.log("reducer data", action.payload.data);
      return _.mapKeys(action.payload.data, 'id');
    case DELETE_QUESTION:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
