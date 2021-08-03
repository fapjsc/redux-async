import _ from 'lodash';

import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPost());

  // 使用lodash 獲得posts裡面的userId, 並去掉重複的item
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  console.log(userIds);

  userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPost = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};
