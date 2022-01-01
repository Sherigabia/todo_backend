require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const todoControllers = require('./controllers/todoController')



app.use(express.json())
app.get('/todos', todoControllers.getAllTodos)
app.post('/todos',todoControllers.addTodo)
app.patch('/todos/:todoId',todoControllers.updateTodoById)
app.delete('/todos/:todoId', todoControllers.deleteTodoById)
app.get('/todos/:todoId', todoControllers.getTodoById)

//listen on a port
app.listen(3000, function () {
       console.log(`Server started`);
       mongoose.connect(process.env.LOCAL_DB).then(function(){
        console.log("DB is Connected")
       }).catch(function(error){
        console.log("DB is not Connected" + error.message)
       })
    });