import React from 'react';
import { connect } from 'react-redux';

import InputPanel from '../../components/InputPanel/InputPanel';
import RepoItems from '../../components/RepoItems/RepoItems';
import * as actions from '../../store/actions';


const HomePage = (props) => {
    const { onFetchRepos } = props;

    return (
        <section>
            <InputPanel submitFunc = {onFetchRepos}/>
            <RepoItems/>
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchRepos: (userNameOrId) => dispatch(actions.fetchFiveFirstRepos(userNameOrId)),
    }
}

export default connect(null, mapDispatchToProps)(HomePage);


