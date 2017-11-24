import _ from 'lodash';
import { FETCH_QUESTIONS } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_QUESTIONS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
