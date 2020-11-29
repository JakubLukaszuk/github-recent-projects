import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    repos: [],
    reposLoading: false,
    commitsLoading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_REPOS_START:
            return{
                ...state,
                reposLoading: true,
                error: null,
            };
        case actionTypes.FETCH_REPOS_SUCCESS:
            return{
                ...state,
                repos: action.repos,
                reposLoading: false,
                error: null,
            };
        case actionTypes.FETCH_REPOS_FAIL:
            return{
                ...state,
                reposLoading: false,
                error: action.error,
            }
        case actionTypes.GITHUB_DATA_CLEANUP:
            return{
                ...state,
                repos: null,
            };
        case actionTypes.FETCH_COMMITS_START:
            return{
                ...state,
                commitsLoading: true,
                error: null,
            }
        case actionTypes.FETCH_COMMITS_SUCCESS:
            const newRepos = state.repos;
            if(action.repoID != null)
            {
                const repoToModifyIndex = newRepos.findIndex(repo => repo.id === action.repoID);
                const updatedCommits = [...newRepos[repoToModifyIndex].commits, ...action.commits];
                newRepos[repoToModifyIndex].commits = updatedCommits;
            }
            return{
                ...state,
                repos: newRepos,
                commitsLoading: false,
                error: null
            };
        case actionTypes.FETCH_COMMITS_FAIL:
            return{
                ...state,
                commitsLoading: false,
                error: action.error,
            }
        default:
            return state;
    }
};

export default reducer;