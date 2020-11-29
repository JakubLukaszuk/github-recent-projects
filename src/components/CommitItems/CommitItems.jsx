import React, {useState} from 'react'

import CommitItem from './CommitItem/CommitItem';
import {AMOUT_COMMITS_TO_FETCH} from '../../constants/apiValues';
import {isOdd} from '../../utils/math';
import SpinnerLoader from '../UI/SpinnerLoader/SpinnerLoader';

import './CommitItems.sass'

const CommitItems = (props) => {
    const {commits, fetchCommits, repoId, commitsLoading} = props;
    const [isBttonInitial, setIsBttonInitial] = useState(true);

    const clickBownloadButton = () => {
        const fetchFrom = commits != null && commits.length ? commits.length : 0;
        const fetchTo = AMOUT_COMMITS_TO_FETCH + fetchFrom;
        fetchCommits(repoId, fetchFrom, fetchTo);
        setIsBttonInitial(false);
    }

    return (
        <div className = "CommitItems">
            <span className = "CommitItems--title">List of commits:</span>
            <ul className = "CommitItems__list">
                {commits.map((commit, i)=> <CommitItem key={i} url = {commit.url} authorName = {commit.authorName} date = {commit.date} isOdd = {isOdd(i)}></CommitItem>)}
            </ul>
        {commitsLoading? <SpinnerLoader /> : <button className="downloadButton downloadButton--blue" onClick={clickBownloadButton}>{isBttonInitial ? "Download": "Download more"}</button>}
        </div>
    )
}

export default CommitItems
