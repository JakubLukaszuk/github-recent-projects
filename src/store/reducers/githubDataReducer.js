import * as actionTypes from '../actions/actionsTypes'

const initialState = {
    repos: [],
    loading: false,
    error: null,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_REPOS_START:
            return{
                ...state,
                loading: true,
                error: null,
            }
        case actionTypes.FETCH_REPOS_SUCCESS:
            return{
                ...state,
                repos: action.repos,
                loading: false,
                error: null
            }
        case actionTypes.GITHUB_DATA_CLEANUP:
            return{
                ...state,
                repos: null
            }
        default:
            return state;
    }
};

export default reducer;