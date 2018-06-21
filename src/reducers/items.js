import{
    FETCH_ITEMS_DATA,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_ERROR
    } from '../actions/items';
    
    
    const initialState = {
        items: [],
        currentItem: null,
        loading: false,
        error: null
    }

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_ITEMS_DATA) {
        return Object.assign({}, state, {
            loading: true
        })
    }
    else if(action.type === FETCH_ITEMS_SUCCESS){
        return Object.assign({}, state,{
            items: action.items,
            loading: false
       }) 
    }   
    else if(action.type === FETCH_ITEMS_ERROR){
        return Object.assign({}, state,{
            loading: false,
            error: action.error
        })
    }
    return state;
}