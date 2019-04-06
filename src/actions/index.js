import jsonPlaceHolder from '../api/jsonPlaceHolder'

export const fetchPosts = () =>
  async (dispatch, getState) => {
    const res = await jsonPlaceHolder.get('./posts')

    dispatch({
      type: 'FETCH_POST',
      payload: res
    })
  }
