import React from 'react';
import Link from '../../components/UI/Link/Link';
import './AssumptionsPage.sass';

const AssumptionsPage = () => {
    return (
        <section className="assumptionContentWrapper">
            <h2 className="assumptionContentWrapper__title">Założenia i informacje o autorze:</h2>
            <span>Napisz aplikację korzystając z najnowszego api react.js (hooki, Context, itd.) spełniającą poniższe założenia.</span>
            <br/>
            <span>Aplikacja:</span>
                <ul>
                    <li>
                        1. korzysta z publicznego API Githuba;
                    </li>
                    <li>
                        2. zpozwala wpisać id użytkownika;
                    </li>
                    <li>
                        3. reaguje na błędne id;
                    </li>
                    <li>
                        4. wyświetla maksymalnie 5 ostatnio zmienionych projektów (w raz z sublistą commitów) podanego użytkownika;
                    </li>
                    <li>
                        5. wyświetla także założenia własne (tej rekrutacyjnej aplikacji) oraz jej autora;
                    </li>
                    <li>
                        6. wyświetla co drugi element każdej listy wyróżnionym kolorem;
                    </li>
                    <li>
                        7. korzysta z LESS / SASS. Spełnia wymogi BEM. Jest też estetyczna;
                    </li>
                    <li>
                        8. jest hostowana (github pages, heroku, itd..), a jej kod jest dostępny publicznie.
                    </li>
                </ul>
                <span>Miło widziane użycie middlewarów reduxowych.</span>
            <br/>
            <footer>
                <span>Autor: Jakub Łukaszuk</span>
                <br/>
                <Link url = "https://github.com/JakubLukaszuk/github-recent-projects">Link do repozytorium</Link>
            </footer>
        </section>
    )
}

export default AssumptionsPage
