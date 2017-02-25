// @flow

import actionNames from '../constants/action-names';

const initialState = {
  weatherInfo: {},
  isLoading: false,
  error: false,
};

export default function (state : Object = initialState, action : Object) {
  switch (action.type) {
    case actionNames.FETCH_DATA_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        weather: action.payload.data,
      };
    }
    case actionNames.FETCH_DATA_REQUEST: {
      return {
        isLoading: true,
        error: false,
        weather: {},
      };
    }
    case actionNames.FETCH_DATA_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
}
