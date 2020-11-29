import React from 'react';
import CommitItems from '../../CommitItems/CommitItems';
import Link from '../../UI/Link/Link';
import './RepoItem.sass';

function RepoItem(props) {
    const {repoData, fetchCommits, commitsLoading, isOdd} = props;

    return (
        <section className = {isOdd ? "repoItem repoItem--odd" : "repoItem"}>
            <ul className = "repoItem__list" >
                <li className = "repoItem__list__listItem repoItem__list__listItem--title">
                    Project name {repoData.name}
                </li>
                <li className = "repoItem__list__listItem repoItem__list__listItem--odd">
                    <a className= "bold">Last update:</a> {repoData.lastUpdateDate}
                </li>
                <li className = "repoItem__list__listItem">
                    <Link url={repoData.url}>Go to repo&gt;&gt;</Link>
                </li>
            </ul>
            <CommitItems repoId = {repoData.id} commits={repoData.commits} fetchCommits = {fetchCommits} commitsLoading = {commitsLoading} />
        </section>

    )
}

export default RepoItem
