import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import {useEffect, useState} from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Card from './components/main/card/Card';



const taskStatuses = ['backlog', 'ready', 'progress', 'finished'];

const initialTasks = [];


function App() {

  const [tasks, setTasks] = useState(initialTasks);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }, [tasks, isLoaded])

  useEffect(() => {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      setTasks(JSON.parse(tasks))
    }
    setIsLoaded(true);
  }, [])

  const addNewCard = (task) => {
    setTasks([...tasks, {...task, id: Math.random(), status: 'backlog', description: 'This task has no description'}])
  }

  const onStatusChange = (id, newStatus) => {
    setTasks(tasks.map((task) => (Number(task.id) === Number(id)) ? {...task, status: newStatus} : task));
  }

  const changeDescriptionCard = (id, newDescription) => {
    setTasks(tasks.map((task) => (Number(task.id) === Number(id)) ? {...task, description: newDescription} : task));
  }
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main tasks={tasks} taskStatuses={taskStatuses} addCard={addNewCard} onStatusChange={onStatusChange} />
    }]
    .concat(
      tasks.map((el) => ({
        path: `/tasks/:${el.id}`,
        element: <Card cards={tasks} changeDescriptionCard={changeDescriptionCard}/>
      }))
    )
  )

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router}/>
      <Footer tasks={tasks} />       
    </div>
  );
}

export default App;
