const initialState = {
  count: 0,
  country: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
              ...state,
              count: state.count + 1
            }
        case 'DECREMENT':
            return {
              ...state,
              count: state.count - 1
            }
        case 'COUNTRY_INFO':
            return {
              ...state,
              country: action.value
            }
        default:
            return state;
    }
}

export default reducer;