const Todo = require("../models/Todo.js")




async function addTodo(req, res){
    try{
     const newTodo = await  Todo.create(req.body);
    res.status(200).json(newTodo)
    }
    catch(error){
        console.log("Cant add data : " + error.message)
        res.status(401).json({message: "Cant add data"})
    }
}

async function deleteTodoById(req, res){
    const todoId = req.params.todoId

    try{
        await Todo.findByIdAndDelete(todoId)
        res.status(200).json({message: "Todo has been Deleted"})
    }
    catch(error)
    {
        console.log("Could not delete todo", error.message)
        res.status(401).json({error:error.message})
    }
}

async function updateTodoById(req, res){
    const todoId = req.params.todoId
    const body = req.body
    try{
        await Todo.findByIdAndUpdate(todoId, body)
        res.status(200).json({message: "Todo is updated"})
    }
    catch(error){
        console.log("COuld not update ", error.message)
        res.status(401).json({error:error.message})
    }
}

async function getTodoById(req, res){
    try{
        const todo = await Todo.findById(req.params.todoId)
        res.status(200).json(todo);
    }
    catch(error){
        console.log("Cant get Todo :", error.message )
        res.status(401).json({error:error.message})
    }
}

async function getAllTodos(req, res){
    try{
        const todos = await Todo.find({})
        res.status(200).json(todos)
    }
    catch(e){
        console.log("Can't get Data : ", e.message )
        res.status(401).json({error:error.message})
    }
}

module.exports = {
    addTodo, deleteTodoById, updateTodoById, getAllTodos, getTodoById
}