import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import userReducer from './user/user.reducer'
import profileReducer from './profile/profile.reducer'
const rootReducer = combineReducers({
    user : userReducer,
    cart : cartReducer,
    profile : profileReducer,
});

export default rootReducer;