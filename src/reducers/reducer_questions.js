import _ from 'lodash';
import { FETCH_QUESTIONS, FETCH_QUESTION } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_QUESTION:
      return { ...state, [ action.payload.data.id]: action.payload.data }
    case FETCH_QUESTIONS:
      // console.log("reducer data", _.mapKeys(action.payload.data, 'id');
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
