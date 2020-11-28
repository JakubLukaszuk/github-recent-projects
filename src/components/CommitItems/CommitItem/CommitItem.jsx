import React from 'react'

function CommitItem(props) {
    console.log(props);
    const {url} = props;
    return (
        <li>
            {url}
        </li>
    )
}

export default CommitItem
