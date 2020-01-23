import { combineReducers } from "redux";
import initial from "./initial";
import Animation from './Animation'
import LoginRegister from './LoginRegister'
import User from './User'
import CameraControl from './CameraControl'
// Import redux here

export default combineReducers({
  initial,
  Animation,
  LoginRegister,
  User,
  CameraControl,
  // Insert redux here
});
