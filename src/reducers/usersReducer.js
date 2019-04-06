export default (state = [], action) => {
  //switch statement
  switch(action.type) {
    case 'FETCH_USER':
      return [...state, action.payload]
    default:
      return state
  }
}
