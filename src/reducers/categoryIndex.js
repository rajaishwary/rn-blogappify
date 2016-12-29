import { RECEIVE_CATEGORY_INDICES } from '../actions';

export default function categoryIndex(state = {
   requestingCategories: true,
}, action) {
  switch (action.type) {
    case RECEIVE_CATEGORY_INDICES:
      return Object.assign({}, state, {
        requestingCategories: false,
      });
    default:
      return state;
  }
}
