import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import RepoItem from './RepoItem/RepoItem';

const RepoItems = props =>{
    const { onFetchCommits, repos, commitsLoading, reposLoading} = props;


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
        onFetchCommits: (repoId, from, to, isSortDesc) => dispatch(actions.fetchCommits(repoId, from, to, isSortDesc)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoItems)
