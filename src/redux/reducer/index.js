import { combineReducers } from 'redux';
import renderDataReducer from './RenderDataReducer';

export default combineReducers({
  renderData: renderDataReducer
});