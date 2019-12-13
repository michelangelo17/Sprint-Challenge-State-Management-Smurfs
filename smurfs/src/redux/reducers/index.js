import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_ERROR,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_ERROR,
  EDIT_SMURF_START,
  EDIT_SMURF_SUCCESS,
  EDIT_SMURF_ERROR,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_ERROR,
  TOGGLE_EDITING,
} from '../actions'

const initialState = {
  smurfs: [],
  loading: false,
  error: null,
  isSubmitting: false,
  editing: false,
  editId: null,
}

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_START:
      return {
        ...state,
        loading: true,
      }
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        loading: false,
      }
    case GET_SMURFS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case ADD_SMURF_START:
      return {
        ...state,
        isSubmitting: true,
        isLoading: true,
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        isLoading: false,
        smurfs: [...action.payload],
      }
    case ADD_SMURF_ERROR:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false,
        isLoading: false,
      }
    case TOGGLE_EDITING:
      return {
        ...state,
        editing: !state.editing,
        editId: action.payload,
      }
    case EDIT_SMURF_START:
      return {
        ...state,
        isSubmitting: true,
        isLoading: true,
        editing: false,
      }
    case EDIT_SMURF_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        isLoading: false,
        editing: false,
        smurfs: [...action.payload],
      }
    case EDIT_SMURF_ERROR:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false,
        isLoading: false,
        editing: false,
      }
      case DELETE_SMURF_START:
      return {
        ...state,
        isSubmitting: true,
        isLoading: true,
      }
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        isLoading: false,
        smurfs: [...action.payload],
      }
    case DELETE_SMURF_ERROR:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false,
        isLoading: false,
      }
    default:
      return state
  }
}
