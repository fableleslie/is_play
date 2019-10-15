const defaultstate ={
    meta: 1
}

export default (state = defaultstate , action) => {
  switch(action.type) {
    case 'changeMeta':
      return {
          meta: action.meta
      }
    default:
      return state
  }
}