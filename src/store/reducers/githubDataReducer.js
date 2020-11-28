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
                error: null
            };
        case actionTypes.GITHUB_DATA_CLEANUP:
            return{
                ...state,
                repos: null
            };
        case actionTypes.FETCH_COMMITS_START:
            return{
                ...state,
                commitsLoading: true,
                error: null,
            };
        case actionTypes.FETCH_COMMITS_SUCCESS:
            const newRepos = state.repos;
            if(action.repoID != null)
            {
                const repoToModifyIndex = newRepos.findIndex(repo => repo.id === action.repoID);
                const updatedCommits = [...newRepos[repoToModifyIndex].commits, ...action.commits];
                console.log(newRepos[repoToModifyIndex]);
                newRepos[repoToModifyIndex].commits = updatedCommits;
            }
            return{
                ...state,
                repos: newRepos,
                reposLoading: false,
                error: null
            };
        default:
            return state;
    }
};

export default reducer;