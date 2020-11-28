import * as actionTypes from './actionsTypes';
import {getReposAsync} from '../../data/providers/githubDataProvider';
export const fetchReposSucces = (repos) =>{
    return{
        type: actionTypes.FETCH_REPOS_SUCCESS,
        repos: repos
    }
}

export const fetchReposFail = () => {
    return{
        type: actionTypes.FETCH_REPOS_FAIL,
    }
}

export const fetchReposStart = () => {
    return{
        type: actionTypes.FETCH_REPOS_START
    }
}
export const fetchRepos = (UserNameOrID, from, to, IsDesc = true) =>{
    return dispatch => {
        dispatch(fetchReposStart());
        getReposAsync(UserNameOrID, from, to, IsDesc)
        .then(response => {
            const fetchedRepos = [];
            for(let key in response){
                fetchedRepos.push({
                    id: response[key].id,
                    url: response[key].html_url,
                    name: response[key].name,
                    commits: [],
                });
            }
            dispatch(fetchReposSucces(fetchedRepos))
        })
        .catch(error =>{
            dispatch(fetchReposFail());
        });
    }
}