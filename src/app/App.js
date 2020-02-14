import React from 'react'
import {IntlProvider} from "react-intl"
import Header from './header/Header'
import messages_en from "translations/en.json"
import messages_fr from "translations/fr.json"
import {LANGUAGES} from './header/Language'
import connect from "react-redux/es/connect/connect"

const messages = {
    [LANGUAGES.fr]: messages_fr,
    [LANGUAGES.en]: messages_en
}

const App = ({language}) => (
    <IntlProvider locale={language} messages={messages[language]}>
        <Header/>
    </IntlProvider>
)

const mapStateToProps = (state) => ({
    language: state.language
})

export default connect(mapStateToProps)(App)