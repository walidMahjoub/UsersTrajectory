import React from 'react'
import style from './Header.scss'
import {FormattedMessage} from 'react-intl'
import Language from './Language'

const Header = () => (
    <div className={style.header}>
        <div className={style.title}>
            <FormattedMessage id="app.header.title"/>
        </div>
        <Language/>
    </div>
)

export default Header
