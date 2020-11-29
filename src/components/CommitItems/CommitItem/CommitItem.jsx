import React from 'react'

import './CommitItem.sass'

function CommitItem(props) {
    const {url, authorName, date, isOdd} = props;
    return (
        <li className = {isOdd ? "commitItem commitItem--odd" : "commitItem"}>
            <ul className= "commitItem__propertyList">
                <li className = "commitItem__propertyList__item">
                    author: {authorName}
                </li>
                <li className = "commitItem__propertyList__item--odd">
                    commit date: {date}
                </li>
                <li className = "commitItem__propertyList__item">
                    <a href={url}>Go to commit</a>
                </li>
            </ul>
        </li>
    )
}

export default CommitItem
