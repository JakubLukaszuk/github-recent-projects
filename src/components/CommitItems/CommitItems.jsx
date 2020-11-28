import React, {useEffect, useState} from 'react'
import CommitItem from './CommitItem/CommitItem';
import {AMOUT_COMMITS_TO_FETCH} from '../../constants/apiValues';

const CommitItems = (props) => {
    const {commits, fetchCommits, repoId, commitsLoading} = props;
    const [isBttonInitial, setIsBttonInitial] = useState(true);

    const clickBownloadButton = () => {
        const fetchFrom = commits != null && commits.length ? commits.length : 0;
        const fetchTo = AMOUT_COMMITS_TO_FETCH + fetchFrom;
        fetchCommits(repoId, fetchFrom, fetchTo);
        setIsBttonInitial(false);
    }

    useEffect(() => {
        console.log(props);
    }, [isBttonInitial])

    return (
        <div>
            <ul>
                {commits.map((commit, i)=> <CommitItem key={i} url = {commit.url}></CommitItem>)}
            </ul>
        {commitsLoading? <span>Loading...</span> :  <button onClick={clickBownloadButton}>{isBttonInitial ? "Download": "Download mode"}</button>}
        </div>
    )
}

export default CommitItems
