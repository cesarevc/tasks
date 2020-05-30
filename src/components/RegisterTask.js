import React, { useState } from 'react';


function RegisterTask () {


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const handleChange = (e) => {

        let content = e.target.value;

        if (e.target.name === 'description') {
            setDescription(content);
        }

        if (e.target.name === 'title') {
            setTitle(content);
        }
    }


    const addTask = async() => {
    
        await fetch('http://localhost:4000/tasks',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title,description})
        }).then(data => data.json()).catch(err => console.log(err));

    }


    const validateform = () => {
        if (title.length > 0 && description.length > 0){
            return  <button type="submit" class="btn btn-success" onClick={addTask}>Add</button>

        }
    }

    return(
        <div class="jumbotron">
            
            <legend>ADD A NEW TASK</legend>
            <form>
            <div class="form-group">
                <label for="exampleTextarea">Title: </label>
                <input 
                    class="form-control form-control-sm" 
                    type="text" 
                    placeholder="add a name for this task" 
                    id="inputSmall"
                    name="title"
                    onChange={handleChange}
                    value={title}
                />
            </div>

            <div class="form-group">
                <label for="exampleTextarea">Description: </label>
                <textarea 
                    class="form-control" 
                    id="exampleTextarea" 
                    rows="2"
                    name="description"
                    onChange={handleChange}
                    value={description}
                />
            </div>

            { validateform() }

            </form>

        </div>
    );
}

export default RegisterTask;