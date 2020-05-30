import React from 'react';
import { SortableElement } from 'react-sortable-hoc';


const SortableItem = SortableElement(({task}) => {
    return <li className="list-group-item">
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <p>{task._id}</p>
          </li> 
});


export default SortableItem;