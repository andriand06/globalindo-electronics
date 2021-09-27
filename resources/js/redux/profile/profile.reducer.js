import profileActionTypes from '../profile/profile.types'
const INITIAL_STATE = {
    hiddenProfile : true
}

const profileReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case profileActionTypes.TOGGLE_PROFILE_HIDDEN :
            return {
                ...state,
                hiddenProfile: !state.hiddenProfile
            }
        default:
            return state;
    }
}

export default profileReducer;