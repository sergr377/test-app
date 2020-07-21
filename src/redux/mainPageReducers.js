const GET_NEWEST_FEEDS = 'GET_NEWEST_FEEDS';
const ADD_POST = 'ADD_POST'
const EDIT_POST = 'EDIT_POST'

const checkingLocalStorage = () => {
    let feeds = []
    let keys = Object.keys(localStorage);
    for (let key of keys) {
        feeds.push(JSON.parse(localStorage.getItem(key)))
    }
    return feeds
}

let initialState = {
    feeds: checkingLocalStorage(),
};

export const mainPageReducers = (state = initialState, action) => {

    switch (action.type) {
        case GET_NEWEST_FEEDS:
            return {
                ...state,
               // feeds: state.feeds.concat(action.newFeedData),
                feeds: [...state.feeds, action.newFeedData]
            }
        case ADD_POST:
            return {
                ...state,
                // feeds: state.feeds.concat(...action.newPostData),
                feeds: [...state.feeds, action.newPostData]
            }
        case EDIT_POST:
            return {
                ...state,
                feeds: [...state.feeds, action.newPostData]
            }
        default: return state
    }
}

export const newFeedsAC = (newFeedData) => {
    const newsId = JSON.stringify(newFeedData.id)
    const feedData = JSON.stringify(newFeedData)
    localStorage.setItem(newsId, feedData)
    return { type: GET_NEWEST_FEEDS, newFeedData }
}

export const newPostAC = (newPostData) => {
    return { type: ADD_POST, newPostData }
}

export const editPostAC = (newEditData) => {
    return { type: EDIT_POST, newEditData }
}

export default mainPageReducers
