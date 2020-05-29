import React, { useState } from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';



const SortableItem = SortableElement(({task}) => {
  return <li className="list-group-item">
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </li> 
})

  


const SortableList = SortableContainer (({tasks}) => {
  return (
    <ul className="list-group">
      {tasks.map((task, i) => <SortableItem  task={task} index={i} key={i} />)}
    </ul>)
})






function Board () {

  const [tasks, setTasks] = useState([
    {title: 'task 1' , 'description': 'task one'},
    {title: 'task 2' , 'description': 'task two'},
    {title: 'task 3' , 'description': 'task three'},
    {title: 'task 4' , 'description': 'task four'},
    {title: 'task 5' , 'description': 'task five'}
  ])


  const onSortEnd = ({oldIndex, newIndex}) => {

    const tasksCopy = [...tasks];
    const newOrderTask = arrayMove(tasksCopy, oldIndex, newIndex);

    setTasks(newOrderTask);
  }

  return  (
    <SortableList tasks={tasks} onSortEnd={onSortEnd} />
  )
}


function App() {


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <Board />
 
        </div>
      </div>
    </div>
  );
}

export default App;
