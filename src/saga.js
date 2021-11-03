import { types } from './actions';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
const API_KEY = "f920ca7cabb6e1b91058112928ee9929";
const ROOT_URL=`/discover/tv?api_key=${API_KEY}&with_networks=213`

export function* watchFetchPost() {
    yield takeEvery(types.FETCH_POST, workFetchPosts);
  }
export function* workFetchPosts() {
    try {
      // Try to call the API
      const uri = `${ROOT_URL}`;
      const response = yield call(axios.get, uri);
      yield put({
        type: types.FETCH_POST,
        payload: response.data
      });
    } catch (error) {
      // Act on the error
      console.log('Request failed! Could not fetch posts.');
    }
  }