import React from 'react'
import {Menu, Dropdown, Icon} from 'antd'
import {connect} from 'react-redux'
import {FormattedMessage} from 'react-intl'
import {setLanguage} from 'actions/language'

export const LANGUAGES = {
    fr: 'fr',
    en: 'en',
}

const Language = ({language, setLanguage}) => {
    const LanguageMenu = () => (
        <Menu>
            {Object.values(LANGUAGES).map(item => (
                <Menu.Item key={item}>
                    <a onClick={() => setLanguage(item)}>
                        <FormattedMessage id={`app.header.language.${item}`}/>
                    </a>
                </Menu.Item>
            ))}
        </Menu>
    )

    return (
        <Dropdown overlay={LanguageMenu} trigger={['click']}>
            <a>
                <FormattedMessage id='app.header.language'/> : <FormattedMessage
                id={`app.header.language.${language}`}/>
                <Icon type="down"/>
            </a>
        </Dropdown>
    )
}

const mapStateToProps = (state) => ({
    language: state.language
})

const mapDispatchToProps = dispatch => ({
    setLanguage: (locale) => {
        dispatch(setLanguage(locale))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Language)
