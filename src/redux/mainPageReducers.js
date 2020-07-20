
const GET_NEWEST_FEEDS = 'GET_NEWEST_FEEDS';

let initialState = {
    feeds: [],
};

export const mainPageReducers = (state = initialState, action) => {

    switch (action.type) {
        case GET_NEWEST_FEEDS:
            return {
                ...state,
                feeds: action.newFeedsData,
            }
        default: return state
    } 
}

export const newFeedsAC = (newFeedsData) => {
    return { type: GET_NEWEST_FEEDS, newFeedsData }
}

export default mainPageReducers
