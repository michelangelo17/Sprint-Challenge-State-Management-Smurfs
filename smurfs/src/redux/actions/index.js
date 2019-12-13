import Axios from 'axios'

export const GET_SMURFS_START = 'GET_SMURFS_START'
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_ERROR = 'GET_SMURFS_ERROR'

export const ADD_SMURF_START = 'ADD_SMURF_START'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_ERROR = 'ADD_SMURF_ERROR'

export const EDIT_SMURF_START = 'EDIT_SMURF_START'
export const EDIT_SMURF_SUCCESS = 'EDIT_SMURF_SUCCESS'
export const EDIT_SMURF_ERROR = 'EDIT_SMURF_ERROR'

export const DELETE_SMURF_START = 'DELETE_SMURF_START'
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'
export const DELETE_SMURF_ERROR = 'DELETE_SMURF_ERROR'

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS_START })
  Axios.get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_SMURFS_ERROR, payload: err }))
}

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_START, payload: smurf })
  Axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_SMURF_ERROR, payload: err }))
}

export const editSmurf = smurf => dispatch => {
  dispatch({ type: EDIT_SMURF_START })
  Axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
  .then(res => dispatch({ type: EDIT_SMURF_SUCCESS, payload: res.data }))
  .catch(err => dispatch({ type: EDIT_SMURF_ERROR, payload: err }))
}

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START })
  Axios.delete(`http://localhost:3333/smurfs/${id}`)
  .then(res => dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data }))
  .catch(err => dispatch({ type: DELETE_SMURF_ERROR, payload: err }))
}