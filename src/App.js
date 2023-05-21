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

const initialTasks = [
      //   {id: 1, title: 'Task 1', status: 'backlog', description: 
      //   'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.'
      // },
      //   {id: 2, title: 'Task 2', status: 'ready', description: 'hello'},
      //   {id: 3, title: 'Task 3', status: 'progress', description: 'hello'},
      //   {id: 4, title: 'Task 4', status: 'finished', description: 'hello'},
      //   {id: 5, title: 'Task 5', status: 'backlog', description: 'hello'},
      //   {id: 6, title: 'Task 6', status: 'progress', description: 'hello'},
      //   {id: 7, title: 'Task 7', status: 'finished', description: 'hello'},
      //   {id: 8, title: 'Task 8', status: 'backlog', description: 'hello'},
      //   {id: 9, title: 'Task 9', status: 'ready', description: 'hello'},
]

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

  const arr = tasks.map((el) => ({
    path: `/tasks/:${el.id}`,
    element: <Card cards={tasks} changeDescriptionCard={changeDescriptionCard}/>
  }))
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main tasks={tasks} taskStatuses={taskStatuses} addCard={addNewCard} onStatusChange={onStatusChange} />
    }]
    .concat(arr)
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
