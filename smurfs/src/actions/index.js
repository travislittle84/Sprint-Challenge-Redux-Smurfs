/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios'

export const GET_SMURFS_START = 'GET_SMURFS_START'
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_FAILED = 'GET_SMURFS_FAILED'

export const ADD_SMURF_START = 'ADD_SMURF_START'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILED = 'ADD_SMURF_FAILED'

export const DELETE_SMURF_START = 'DELETE_SMURF_START'
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'
export const DELETE_SMURF_FAILED = 'DELETE_SMURF_FAILED'

export function getSmurfs() {
  return (dispatch) => {
    dispatch({ type: GET_SMURFS_START })
    
    axios.get('http://localhost:3333/smurfs')
      .then((res) => {
        dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data })
      })
      .catch((error) => {
        console.log("Error getting friends", error)
        dispatch({ type: GET_SMURFS_FAILED, payload: error })
      })
  }
}

export function addSmurf(smurf) {
  return (dispatch) => {
    dispatch({ type: ADD_SMURF_START })

    axios.post('http://localhost:3333/smurfs', smurf)
      .then((res) => {
        dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
      })
      .catch((error) => {
        dispatch({ type: ADD_SMURF_FAILED, payload: error })
        console.log("Error when adding Smurf", error)
      })
  }
}

export function deleteSmurf(id) {
  return (dispatch) => {
    dispatch({ type: DELETE_SMURF_START })

    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data })
      })
      .catch((error => {
        dispatch({ type: DELETE_SMURF_FAILED, payload: error })
        console.log("Error deleting Smurf", error)
      }))
  }
}