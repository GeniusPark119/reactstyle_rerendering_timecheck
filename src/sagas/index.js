import { all } from 'redux-saga/effects';
import renderDataSaga from './RenderDataSaga';

export default function* rootSaga() {
  yield all([
    renderDataSaga()
  ]);
}