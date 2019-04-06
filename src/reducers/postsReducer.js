export default (state = [], action) => {
  //switch statement
  switch(action.type) {
    case 'FETCH_POST':
      return action.payload
    default:
      return state
  }
}
