import _ from 'lodash';
import { FETCH_QUESTION } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_QUESTION:
      const question = action.payload.data[0];
      console.log(action.payload);
      return { ...state, [question.id]: question }
    default:
      return state;
  }
}
