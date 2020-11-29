import React from 'react'

import Link from '../../UI/Link/Link';

import './CommitItem.sass'

function CommitItem(props) {
    const {url, authorName, date, isOdd} = props;
    return (
        <li className = {isOdd ? "commitItem commitItem--odd" : "commitItem"}>
            <ul className= "commitItem__propertyList">
                <li className = "commitItem__propertyList__item">
                    <a className = "bold">author:</a> {authorName}
                </li>
                <li className = "commitItem__propertyList__item commitItem__propertyList__item--odd">
                    <a className = "bold">commit date:</a> {date}
                </li>
                <li className = "commitItem__propertyList__item">
                    <Link url = {url}>Go to commit&gt;&gt;</Link>
                </li>
            </ul>
        </li>
    )
}

export default CommitItem
