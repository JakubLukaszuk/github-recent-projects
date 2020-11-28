import * as actionTypes from './actionsTypes';
import {getCommitsAsync} from '../../data/providers/githubDataProvider';

export const fetchCommitsSucces = (repoID, fetchedCommitsAmout,commits) =>{
    return{
        type: actionTypes.FETCH_COMMITS_SUCCESS,
        repoID: repoID,
        commits: commits,
        fetchedCommitsAmout: fetchedCommitsAmout,
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
                fetchedCommits.push({
                    authorName: response[key].commit.author.name,
                    date: response[key].commit.author.date,
                    url: response[key].html_url,
                });
            }
            dispatch(fetchCommitsSucces(repoID, fetchedCommits.length ,fetchedCommits))
        })
        .catch(error =>{
            dispatch(fetchCommitsFail());
        });
    }
}