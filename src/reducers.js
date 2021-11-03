import { types } from './actions'
export default (state = {}, action) => {
    switch (action.type){
        case types.FETCH_POST_SUCCESS:
        return { ...state, [action.payload.id]: action.payload };

    }
}