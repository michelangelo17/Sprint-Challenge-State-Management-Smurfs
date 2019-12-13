import Axios from 'axios'

export const GET_SMURFS_START = 'GET_SMURFS_START'
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_ERROR = 'GET_SMURFS_ERROR'
export const ADD_SMURF_START = 'ADD_SMURF_START'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_ERROR = 'ADD_SMURF_ERROR'

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
