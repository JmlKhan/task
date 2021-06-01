import React from 'react';
import './App.css';
import TaskForm from './components/TaskFrom';
import TaskList from './components/TaskList';
import TaskListProvider from './components/TaskListContext';
import Header from './components/Header';

function App() {
  return (
   <TaskListProvider>
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <div className="main">
          <TaskForm />
           <TaskList />
        </div>
      </div>
    </div>
         
       
    </TaskListProvider>
  );
}

export default App;
