// Action Types
export const ADD_RENDER_DATA = 'ADD_RENDER_DATA';

// Action Creator
export const addRenderData = (data) => ({
  type: ADD_RENDER_DATA,
  payload: data
});
