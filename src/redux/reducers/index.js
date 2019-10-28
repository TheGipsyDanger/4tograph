import { combineReducers } from "redux";
import initial from "./initial";
import Animation from './Animation'
import LoginRegister from './LoginRegister'
import User from './User'
// Import redux here

export default combineReducers({
  initial,
  Animation,
  LoginRegister,
  User,
  // Insert redux here
});
