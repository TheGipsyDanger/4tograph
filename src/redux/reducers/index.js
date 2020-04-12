import { combineReducers } from "redux";
import initial from "./initial";
import Animation from './Animation'
import LoginRegister from './LoginRegister'
import User from './User'
import CameraControl from './CameraControl'
import Word from './Word'
import Modal from './Modal'
import Loading from './Loading'
import CreateGame from './CreateGame'
import Friends from './Friends'
// Import redux here

export default combineReducers({
  initial,
  Animation,
  LoginRegister,
  User,
  CameraControl,
  Word,
  Modal,
  Loading,
  CreateGame,
  Friends,
  // Insert redux here
});
