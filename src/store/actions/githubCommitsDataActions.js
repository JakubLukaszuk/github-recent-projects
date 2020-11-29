import * as actionTypes from './actionsTypes';
import {getCommitsAsync} from '../../data/providers/githubDataProvider';
import {prepearDateFromResponse} from '../../utils/date';

export const fetchCommitsSucces = (repoID,commits) =>{
    return{
        type: actionTypes.FETCH_COMMITS_SUCCESS,
        repoID: repoID,
        commits: commits,
    }
}

export const fetchCommitsFail = () => {
    return{
        type: actionTypes.FETCH_COMMITS_FAIL,
    }
}

export const fetchCommitsStart = () => {
    return{
        type: actionTypes.FETCH_COMMITS_START,
    }
}
export const fetchCommits = (repoID, from, to, IsDesc = true) =>{
    return dispatch => {
        dispatch(fetchCommitsStart());
        getCommitsAsync(repoID, from, to, IsDesc)
        .then(response => {
            const fetchedCommits = [];
            for(let key in response){
                const commitDate = prepearDateFromResponse(response[key].commit.author.date)
                fetchedCommits.push({
                    authorName: response[key].commit.author.name,
                    date: commitDate,
                    url: response[key].html_url,
                });
            }
            dispatch(fetchCommitsSucces(repoID, fetchedCommits))
        })
        .catch(error =>{
            dispatch(fetchCommitsFail());
        });
    }
}