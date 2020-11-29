import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import SpinnerLoader from '../UI/SpinnerLoader/SpinnerLoader';
import RepoItem from './RepoItem/RepoItem';
import {isOdd} from '../../utils/math';
import './RepoItems.sass'
import { ToastContainer, toast } from 'react-toastify';


const RepoItems = props =>{
    const { onFetchCommits, repos, commitsLoading, reposLoading, error} = props;

    useEffect(() => {
        if(error!= null)
        {
            toast(error);
        }
    }, [error])


    return (
        <React.Fragment>
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={true}/>
            {reposLoading? <SpinnerLoader/>:
            <ul className = "RepoItems">
                {repos.map((repo, i) => (<RepoItem key={i} repoData = {repo} fetchCommits={onFetchCommits} commitsLoading= {commitsLoading} isOdd={isOdd(i)} />))}
            </ul>}
        </React.Fragment>
        )
}

const mapStateToProps = (state) => ({
    repos: state.repos,
    commitsLoading: state.commitsLoading,
    reposLoading: state.reposLoading,
    error: state.error
})

const mapDispatchToProps = dispatch => {
    return {
        onFetchCommits: (repoId, from, to, isSortDesc) => dispatch(actions.fetchCommits(repoId, from, to, isSortDesc)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoItems)
