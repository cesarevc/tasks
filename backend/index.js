const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const url = 'mongodb://localhost/sortableReact'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Database is connected on port 27017'))
.catch( err => console.log(err))




const app = express();


const TASK = require('./models/task');

const port = 4000;
//middleware
app.use(cors());
app.use(express.json());


//ROUTES
app.get('/tasks', async (req, res) => {
    const tasks = await TASK.find();
    res.json(tasks);
})
app.post('/tasks', async(req, res) => {
    const newTask = new TASK(req.body);
    newTask.order = await TASK.estimatedDocumentCount();
    // console.log(newTask.order);
    newTask.save();
    res.json(newTask);
});
app.put('/tasks', async(req, res) => {

    const tasksIDS  = req.body;

    for (const [i, id] of tasksIDS.entries()) {
        await TASK.updateOne({_id: id}, {order: i})
    }
    res.json({msg: 'tasks was updated successful'});
});


app.listen(port, () => {
    console.log(`server on port ${port}`)
});