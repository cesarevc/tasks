import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

const SortableItem = SortableElement(({task}) => {

  const handleDeleteItem = () => {
    console.log("SIBORRA")
  }

  
  return (
    
    <div  className="list-group-item list-group-item-action flex-column align-items-start ">
        
        <div class="toast-header">
          <h1 class="mr-auto">{task.title}</h1>
          <small>{task.order + 1}</small>
          <form>

            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" onClick={handleDeleteItem}>
              <span aria-hidden="true">&times;</span>
            </button>
          </form>
        </div>

        <div class="toast-body">
          <small>Description: </small>
          <p>{task.description}</p>
          <small>ID {task._id}</small>
        </div>

    </div> 
  ); 

});


export default SortableItem;