import React, {useEffect} from 'react';
import CommitItems from '../../CommitItems/CommitItems';

function RepoItem(props) {
    const {repoData, fetchCommits, commitsLoading} = props;

    return (
        <section>
            <h6>{repoData.name}</h6>
            <span>{repoData.url}</span>
            <CommitItems repoId = {repoData.id} commits={repoData.commits} fetchCommits = {fetchCommits} commitsLoading = {commitsLoading} />
        </section>
    )
}

export default RepoItem
