import React from 'react';
import {Link} from 'react-router-dom';

import {HOME} from '../../constants/routes';

import './NotFoundPage.sass';

const NotFoundPage = () => {
    return (
        <section className="notFoundPageWrapper">
            <span>Błąd 404. Strony nie zaleziono</span>
            <Link to={HOME}>
                Powórt na stronę główną
            </Link>
        </section>
    )
}

export default NotFoundPage
