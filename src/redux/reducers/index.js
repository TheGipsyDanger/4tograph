import { combineReducers } from "redux";
import initial from "./initial";
import Animation from './Animation'
import LoginRegister from './LoginRegister'
import User from './User'
import CameraControl from './CameraControl'
import Word from './Word'
import Modal from './Modal'
// Import redux here

export default combineReducers({
  initial,
  Animation,
  LoginRegister,
  User,
  CameraControl,
  Word,
  Modal,
  // Insert redux here
});
