import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';

const HomePage = props =>{
    const {onFetchRepos, repos} = props;
    useEffect(() => {
        onFetchRepos(41912745,0,5,true);
    }, [])
        return (
            <div>
                HP
                <ul>
                    {repos.map((repo) => (<li>{repo.name}</li>))}
                </ul>
            </div>
        )
}

const mapStateToProps = (state) => ({
    repos: state.repos
})

const mapDispatchToProps = dispatch => {
    return {
        onFetchRepos: (userNameOrId, from, to, isSortDesc) => dispatch(actions.fetchRepos(userNameOrId, from, to, isSortDesc))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
