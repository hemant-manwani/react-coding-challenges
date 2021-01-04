import { useEffect, useReducer } from 'react';
import { fetchData as fetchDataApi } from '../../api';

const typeToDataKeyMap = {
  'categories': 'categories',
  'featured-playlists': 'playlists',
  'new-releases': 'albums',
};

// hook initial state
const initialState = {
  data: [],
  error: null,
  fetching: false,
};

// hook state change types
const FETCH_DATA = 'FETCH_DATA';
const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

// hook state reducer function
const reducer = (state, { type, payload }) => {
  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_DATA_FAILED:
      return {
        ...state,
        error: payload,
        fetching: false,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
        fetching: false,
      };
    // no default
  }
}

// hook state action creators
const fetchData = (data, dispatch) => dispatch({ type: FETCH_DATA });
const fetchDataFailed = (error, dispatch) => dispatch({ type: FETCH_DATA_FAILED, payload: error });
const fetchDataSuccess = ({ type, data }, dispatch) => {
  const dataKey = typeToDataKeyMap[type];
  const items = data[dataKey]?.items;
  dispatch({ type: FETCH_DATA_SUCCESS, payload: items })
}

// hook
const useSpotifyFetcher = type => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // side effect - to fetch the data and update hook state.
  useEffect(() => {
    fetchData(null, dispatch);
    fetchDataApi(type).then(data => {
      fetchDataSuccess({ type, data }, dispatch);
    }).catch(err => {
      fetchDataFailed(err, dispatch);
    });
  }, [type]);
  return state;
};

export default useSpotifyFetcher;