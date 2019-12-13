import { GET_SMURFS_START, GET_SMURFS_SUCCESS, GET_SMURFS_ERROR } from "../actions"

const initialState = {
  smurfs: [],
  loading: false,
  error: null,
  
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
        smurfs: [...state.smurfs, action.payload],
        loading: false,
      }
    case GET_SMURFS_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}