import { takeEvery, call } from 'redux-saga/effects';
import { ADD_RENDER_DATA } from '../redux/actions/RenderDataActions';

function* handleAddRenderData(action) {
  // yield call(console.log, action.payload);
}

export default function* renderDataSaga() {
  yield takeEvery(ADD_RENDER_DATA, handleAddRenderData);
}
