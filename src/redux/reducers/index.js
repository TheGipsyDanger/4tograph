import { combineReducers } from "redux";
import initial from "./initial";
import Animation from './Animation'
import LoginRegister from './LoginRegister'
import User from './User'
import CameraControl from './CameraControl'
import Word from './Word'
// Import redux here

export default combineReducers({
  initial,
  Animation,
  LoginRegister,
  User,
  CameraControl,
  Word,
  // Insert redux here
});
