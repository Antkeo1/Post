import jsonPlaceHolder from '../api/jsonPlaceHolder'

export const fetchPosts = () =>
  async (dispatch, getState) => {
    const res = await jsonPlaceHolder.get('./posts')

    dispatch({
      type: 'FETCH_POST',
      payload: res.data
    })
  }

  export const fetchUser = (id) => async dispatch => {
      const res = await jsonPlaceHolder.get(`/users/${id}`)

      dispatch({
        type: 'FETCH_USER',
        payload: res.data
      })
    }
