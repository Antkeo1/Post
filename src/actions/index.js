import _ from 'lodash'
import jsonPlaceHolder from '../api/jsonPlaceHolder'

// getState is a function inside redux that gives us access to all the data
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())
// using lodash map function we will map thru all post and get the unique userId
// .uniq gives us the unique userId
// chain is a function inside lodash tht aloows us to chain additonal function
// that we will minpulate
// .value() tells chain function to run the listed function
  _.chain(getState().post)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
}

// fetchpost api call
export const fetchPosts = () =>
  async (dispatch, getState) => {
    const res = await jsonPlaceHolder.get('./posts')

    dispatch({
      type: 'FETCH_POST',
      payload: res.data
    })
  }

//fetch user api call
export const fetchUser = id => async dispatch => {
       const res = await jsonPlaceHolder.get(`/users/${id}`)

       dispatch({
         type: 'FETCH_USER',
         payload: res.data
       })
     }

     //fetch user api call with _.memoize
     // export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch)
        // const _fetchUser = _.memoize(async (id, dispatch) => {
          //  const res = await jsonPlaceHolder.get(`/users/${id}`)

            //dispatch({
              // type: 'FETCH_USER',
              // payload: res.data
            // })
          // })
