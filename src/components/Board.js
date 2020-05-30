import React, { useState, useEffect } from 'react';
import arrayMove from 'array-move';
import SortableList from './SortableList';


function Board () {

    const [tasks, setTasks] = useState([]);
  
    const fetchApi = async() => {
      const response = await fetch('http://localhost:4000/tasks')
        .then(data => data.json())
        .catch(err => console.log(err));
      // Ordena los items por su 'order' de la bd
      response.sort((a, b) => (
        (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0)
      ));
      // actualiza el estado
      setTasks(response);
    }


    const uptatedOrder = async(tasksIds) => {
        await fetch('http://localhost:4000/tasks',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tasksIds)
        }).then(data => data.json()).catch(err => console.log(err));

    }
  
    //se ejecuta al inicio
    useEffect(() => {
      fetchApi(); 
    }, []);
  
    const onSortEnd = async({oldIndex, newIndex}) => {
  
        const tasksCopy = [...tasks];
        //arraymove sirve para reordenar un arreglo
        const newOrderTask = arrayMove(tasksCopy, oldIndex, newIndex);
        //actualiza el estado con el nuevo orden del arreglo
        setTasks(newOrderTask);
        //selecciona los ids en el orden actualizado
        const tasksIds = newOrderTask.map(t => t._id);
        //actualiza en la bd el orden actual del arreglo
        uptatedOrder(tasksIds);
    }
  
    return  (
      <SortableList tasks={tasks} onSortEnd={onSortEnd} />
    )
  }

  export default Board;