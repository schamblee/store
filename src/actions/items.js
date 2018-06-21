import { API_BASE_URL } from '../config';

export const FETCH_ITEMS_DATA = 'FETCH_ITEMS_DATA'
export const fetchItemsData = () => ({
    type:'FETCH_ITEMS_DATA',
})


export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'
export const fetchItemsSuccess = (items) => ({
    type:'FETCH_ITEMS_SUCCESS',
    items: items
})


export const FETCH_ITEMS_ERROR= 'FETCH_ITEMS_ERROR'
export const fetchItemsError = (error) => dispatch => ({
    type:'FETCH_ITEMS_ERROR',
    error
})

export const fetchItems = () => (dispatch, getState) => {
    //retrieve items
    dispatch(fetchItemsData());
    fetch(`${API_BASE_URL}`)
        .then(res => res.json())
        .then(items => dispatch(fetchItemsSuccess(items)))
        .catch(err=> dispatch(fetchItemsError(err)))
}