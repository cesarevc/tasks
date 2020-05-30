import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import SortableItem from './SortableItem';

const SortableList = SortableContainer (({tasks}) => {
  

    return (
      <div className="list-group">
          
          {
            tasks.map((task, i) => 
              <SortableItem  
                task={task} 
                index={i} 
                key={i} 
              />)
          }

      </div>)
})
  
export default SortableList;