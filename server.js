require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const todoControllers = require('./controllers/todoController')
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())
app.get('/', function(req,res){
   res.status(200).json({message: "Welcome to the Todo api"})
})
app.get('/todos', todoControllers.getAllTodos)
app.post('/todos',todoControllers.addTodo)
app.patch('/todos/:todoId',todoControllers.updateTodoById)
app.delete('/todos/:todoId', todoControllers.deleteTodoById)
app.get('/todos/:todoId', todoControllers.getTodoById)

//listen on a port
app.listen(PORT, function () {
       console.log(`Server started`);
       mongoose.connect(process.env.DB_URL,
         {
            useNewUrlParser: true,
            useUnifiedTopology: true
         }).then(function(){
        console.log("DB is Connected")
       }).catch(function(error){
        console.log("DB is not Connected" + error.message)
       })
    });