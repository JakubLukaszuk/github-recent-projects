import React from 'react';
import { connect } from 'react-redux';

import InputPanel from '../../components/InputPanel/InputPanel';
import RepoItems from '../../components/RepoItems/RepoItems';
import * as actions from '../../store/actions';

import './HomePage.sass'


const HomePage = (props) => {
    const { onFetchRepos } = props;

    return (
        <section className="homePage">
            <h2 className="homePage__title">Check 5 Leastest Github Projects</h2>
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


