import jsonPlaceHolder from '../api/jsonPlaceHolder'

export const fetchPosts = () => {
  return function(dispatch, getState) {
    const promise = jsonPlaceHolder.get('./posts')

    return {
      type: 'FETCH_POST',
      payload: promise
    }
  }
}
