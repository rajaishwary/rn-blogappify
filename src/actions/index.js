import { GET_CATEGORY_INDEX } from '../constants/Api';
import { getFetch, postFetch, deleteFetch } from '../utils/APIUtils';

export const RECEIVE_CATEGORY_INDICES = 'RECEIVE_CATEGORY_INDICES';

export function fetchCategories() {
    return (dispatch, getState) => {
        return getFetch(`${GET_CATEGORY_INDEX}`)
            .then(response => { 
                    dispatch(receiveCategoryIndices(response));
                })
                .catch(err => {
                    console.log(err);
                });
            }
    };

export function receiveCategoryIndices(data) {
    return {
        type: RECEIVE_CATEGORY_INDICES,
        data,
    }
}