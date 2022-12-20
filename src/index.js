import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import * as actions from "./store/actions"
import { initialStore } from './store/store';


const store = initialStore();

const App = (params) => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => { setState(store.getState()); })
  }, [])

  const compleatedTask = (taskId) => {
    store.dispatch(actions.compleatedTask(taskId));
  };

  const changeTitle = (taskId) => {
    store.dispatch(actions.changeTitle(taskId))
  }
  const deleteTask = (taskId) => {
    store.dispatch(actions.deleteTitle(taskId));
  }
  return (<><h1>App</h1>
    <ul>
      {state.map((el) => <li key={el.id}><p>{el.title}</p><p>{`Completed: ${el.completed}`}</p>
        <button onClick={() => compleatedTask(el.id)}>Completed</button>
        <button onClick={() => changeTitle(el.id)}>Change Title</button>
        <button onClick={() => deleteTask(el.id)}>Delete</button><hr />
      </li>)}
    </ul>
  </>)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
