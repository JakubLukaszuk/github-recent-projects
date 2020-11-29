import React from 'react';
import CommitItems from '../../CommitItems/CommitItems';
import './RepoItem.sass';

function RepoItem(props) {
    const {repoData, fetchCommits, commitsLoading, isOdd} = props;

    return (
        <section className = {isOdd ? "RepoItem RepoItem--odd" : "RepoItem"}>
            <ul className = "RepoItem__list" >
                <li className = "RepoItem__list__listItem">Project name: {repoData.name}</li>
                <li className = "RepoItem__list__listItem--odd">Last update: {repoData.lastUpdateDate}</li>
                <li className = "RepoItem__list__listItem"><a href={repoData.url}>Go to repo</a></li>
            </ul>
            <CommitItems repoId = {repoData.id} commits={repoData.commits} fetchCommits = {fetchCommits} commitsLoading = {commitsLoading} />
        </section>

    )
}

export default RepoItem
