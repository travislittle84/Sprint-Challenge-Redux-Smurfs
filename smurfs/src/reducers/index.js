import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILED,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILED,
} from '../actions/index'

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  errorMessage: null
}

export default function (state = initialState, action) {
  switch(action.type){
    case GET_SMURFS_START:
      return {
        ...state,
        gettingSmurfs: true,
        errorMessage: null
      }
    case GET_SMURFS_SUCCESS:
      const newSmurfs = action.payload
      return {
        ...state,
        gettingSmurfs: false,
        errorMessage: null,
        smurfs: newSmurfs
      }
    case GET_SMURFS_FAILED:
      return {
        ...state,
        gettingSmurfs: false,
        errorMessage: action.payload
      }
    case ADD_SMURF_START:
      return {
        ...state,
        addingSmurf: true,
        errorMessage: null
      }
    case ADD_SMURF_SUCCESS:
      const newList = action.payload
      return {
        ...state,
        addingSmurf: false,
        errorMessage: null,
        smurfs: newList
      }
    case ADD_SMURF_FAILED:
      return {
        ...state,
        addingSmurf: false,
        errorMessage: action.payload
      }
    
    default:
      return state
  }
}


