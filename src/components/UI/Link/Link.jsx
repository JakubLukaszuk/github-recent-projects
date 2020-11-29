import React from 'react'
import './Links.sass'

const Link = (props) => {
    return (
        <a className="link" href={props.url}>{props.children}</a>
    )
}

export default Link
