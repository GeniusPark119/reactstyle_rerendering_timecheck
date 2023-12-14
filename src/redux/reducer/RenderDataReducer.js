import { ADD_RENDER_DATA } from '../actions/RenderDataActions';

const renderDataReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_RENDER_DATA:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default renderDataReducer;
