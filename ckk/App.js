// App.js
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoReducer from './redux/todoRedux';
import Todo2 from './todo2';

const store = createStore(todoReducer);
// ... (your other imports)
const App = () => {
  return (
    <Provider store={store}>
      <Todo2 />
    </Provider>
    
  );
};
export default App;
