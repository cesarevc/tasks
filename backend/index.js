const express = require('express');
const mongoose = require('mongoose');

const url = 'mongodb://localhost/sortableReact'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Database is connected on port 27017'))
.catch( err => console.log(err))




const app = express();


const TASK = require('./models/task');

const port = 4000;
app.use(express.json());


//ROUTES
app.get('/tasks', async (req, res) => {
    const tasks = await TASK.find();
    res.json(tasks);
})
app.post('/tasks', (req, res) => {
    // console.log(req.body);
    const newTask = new TASK(req.body);
    newTask.save();
    res.json('received');
});


app.listen(port, () => {
    console.log(`server on port ${port}`)
});