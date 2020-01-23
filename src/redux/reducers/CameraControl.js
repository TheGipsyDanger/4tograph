import axios from 'axios'

export const Types = {
  SET_INDEX_CAMERA: 'CameraControl/SET_INDEX_CAMERA',
  SET_PHOTO_WITH_INDEX: 'CameraControl/SET_PHOTO_WITH_INDEX',
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
}

const INITIAL_STATE = {
  photos: [],
  cameraIndex: 0,
}

export default function CameraControl(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state
      break
  }
}
