import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import {useState} from 'react';

const taskStatuses = ['backlog', 'ready', 'progress', 'finished'];

const initialTasks = [
        {id: 1, title: 'Task 1', status: 'backlog'},
        {id: 2, title: 'Task 2', status: 'ready'},
        {id: 3, title: 'Task 3', status: 'progress'},
        {id: 4, title: 'Task 4', status: 'finished'},
        {id: 5, title: 'Task 5', status: 'backlog'},
        {id: 6, title: 'Task 6', status: 'progress'},
        {id: 7, title: 'Task 7', status: 'finished'},
        {id: 8, title: 'Task 8', status: 'backlog'},
        {id: 9, title: 'Task 9', status: 'ready'},
]


function App() {

  const [tasks, setTasks] = useState(initialTasks);

  const addNewCard = (task) => {
    setTasks([...tasks, {...task, id: Math.random(), status: 'backlog'}])
  }

  const onStatusChange = (id, newStatus) => {
    setTasks(tasks.map((task) => (Number(task.id) === Number(id)) ? {...task, status: newStatus} : task));
  }
  
  return (
    <div className="App">
      <Header />
      <Main tasks={tasks} taskStatuses={taskStatuses} addCard={addNewCard} onStatusChange={onStatusChange} />
      <Footer />
    </div>
  );
}

export default App;
