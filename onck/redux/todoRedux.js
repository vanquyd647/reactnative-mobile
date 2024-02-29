// todoReducer.js
//state
const initialState = {
    job: '',
    data: [],
    // selectedJob: { id: '', job: '' }
  };
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_JOB':
        return { ...state, job: action.payload };
      case 'SET_DATA':
        return { ...state, data: action.payload };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  