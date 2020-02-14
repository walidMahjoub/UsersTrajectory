import {SET_LANGUAGE} from "actions/language"

const languageReducer = (state = 'fr', action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return action.payload
        default:
            return state
    }
}

export default languageReducer
