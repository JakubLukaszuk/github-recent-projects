import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import RepoItem from './RepoItem/RepoItem';

const RepoItems = props =>{
    const {onFetchRepos, onFetchCommits, repos, commitsLoading, reposLoading} = props;
    useEffect(() => {
        onFetchRepos(41912745,0,5,true);
    }, [])

    return (
        <div>
            HP
            {reposLoading? 'Loading...':
            <ul>
                {repos.map((repo, i) => (<RepoItem key={i} repoData = {repo} fetchCommits={onFetchCommits} commitsLoading= {commitsLoading}/>))}
            </ul>}
        </div>
        )
}

const mapStateToProps = (state) => ({
    repos: state.repos,
    commitsLoading: state.commitsLoading,
    reposLoading: state.reposLoading
})

const mapDispatchToProps = dispatch => {
    return {
        onFetchRepos: (userNameOrId, from, to, isSortDesc) => dispatch(actions.fetchRepos(userNameOrId, from, to, isSortDesc)),
        onFetchCommits: (repoId, from, to, isSortDesc) => dispatch(actions.fetchCommits(repoId, from, to, isSortDesc)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoItems)