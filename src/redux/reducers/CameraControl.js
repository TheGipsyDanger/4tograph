import axios from 'axios'

export const Types = {
  SET_INDEX_CAMERA: 'CameraControl/SET_INDEX_CAMERA',
  SET_PHOTO_WITH_INDEX: 'CameraControl/SET_PHOTO_WITH_INDEX',
  CHANGE_STEP_CAMERA: 'CameraControl/CHANGE_STEP_CAMERA',
}

export const Actions = {
  setPhotoWithIndex: (photo, index) => {
    return {
      type: Types.SET_PHOTO_WITH_INDEX,
      payload: {
        photo,
        index,
      },
    }
  },
  setIndexCamera: index => {
    return {
      type: Types.SET_INDEX_CAMERA,
      payload: index,
    }
  },
  changeStepCamera: status => {
    console.log(status)

    return {
      type: Types.CHANGE_STEP_CAMERA,
      payload: status,
    }
  },
}

const INITIAL_STATE = {
  photos: [],
  cameraIndex: 0,
  cameraInStartStep: true,
}

export default function CameraControl(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_PHOTO_WITH_INDEX:
      return {
        ...state,
      }
    case Types.SET_INDEX_CAMERA:
      return {
        ...state,
        cameraIndex: action.payload,
      }
    case Types.CHANGE_STEP_CAMERA:
      return {
        ...state,
        cameraInStartStep: action.payload,
      }
    default:
      return state
      break
  }
}
