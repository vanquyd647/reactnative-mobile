// todoReducer.js
//state
const initialState = {
    name: '',
    data: [],
 
  };
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_NAME':
        return { ...state, name: action.payload };
      case 'SET_DATA':
        return { ...state, data: action.payload };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  