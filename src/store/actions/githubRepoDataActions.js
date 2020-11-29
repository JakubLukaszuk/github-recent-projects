import * as actionTypes from './actionsTypes';
import {getReposAsync} from '../../data/providers/githubDataProvider';
import {AMOUT_REPOS_TO_FETCH} from '../../constants/apiValues';
import {prepearDateFromResponse} from '../../utils/date';
import {getErrorMessage} from '../../utils/error';

export const fetchReposSucces = (repos) =>{
    return{
        type: actionTypes.FETCH_REPOS_SUCCESS,
        repos: repos
    }
}

export const fetchReposFail = (errorMessage) => {
    return{
        type: actionTypes.FETCH_REPOS_FAIL,
        error: errorMessage
    }
}

export const fetchReposStart = () => {
    return{
        type: actionTypes.FETCH_REPOS_START
    }
}

export const fetchFiveFirstRepos = (UserNameOrId) => {
    return dispatch => {
        dispatch(fetchRepos(UserNameOrId, 0, AMOUT_REPOS_TO_FETCH));
    }
}

export const fetchRepos = (UserNameOrID, from, to, IsDesc = true) =>{
    return dispatch => {
        dispatch(fetchReposStart());
        getReposAsync(UserNameOrID, from, to, IsDesc)
        .then(response => {
            const fetchedRepos = [];
            for(let key in response){
                const lastUpdateDate = prepearDateFromResponse(response[key].updated_at)
                fetchedRepos.push({
                    id: response[key].id,
                    url: response[key].html_url,
                    name: response[key].name,
                    lastUpdateDate: lastUpdateDate,
                    commits: [],
                });
            }
            dispatch(fetchReposSucces(fetchedRepos))
        })
        .catch(error =>{
            dispatch(fetchReposFail(getErrorMessage(error)));
        });
    }
}