import axios from 'axios'

export const Types = {
  SET_INDEX_CAMERA: 'CameraControl/SET_INDEX_CAMERA',
  SET_PHOTO_WITH_INDEX: 'CameraControl/SET_PHOTO_WITH_INDEX',
  CHANGE_STEP_CAMERA: 'CameraControl/CHANGE_STEP_CAMERA',
  SAVE_CAPTURE_IMAGE: 'CameraControl/SAVE_CAPTURE_IMAGE',
  ASSIGN_IMAGE: 'CameraControl/ASSIGN_IMAGE',
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
    return {
      type: Types.CHANGE_STEP_CAMERA,
      payload: status,
    }
  },
  saveCaptureImage: image => {
    return {
      type: Types.SAVE_CAPTURE_IMAGE,
      payload: image,
    }
  },
  assignImage: () => {
    return {
      type: Types.ASSIGN_IMAGE,
    }
  },
}

const INITIAL_STATE = {
  photos: [
    {
      id: 0,
      photo: '',
    },
    {
      id: 1,
      photo: '',
    },
    {
      id: 2,
      photo: '',
    },
    {
      id: 3,
      photo: '',
    },
  ],
  currentPhoto: '',
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
    case Types.SAVE_CAPTURE_IMAGE:
      return {
        ...state,
        currentPhoto: action.payload,
      }
    case Types.ASSIGN_IMAGE:
      state.photos[state.cameraIndex].photo = state.currentPhoto
      return {
        ...state,
      }
    default:
      return state
      break
  }
}
