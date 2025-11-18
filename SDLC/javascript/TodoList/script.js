let input=document.getElementById("input");
let button=document.getElementById("add")
let todoli=document.getElementById("todolist");


let todos=[];

window.onload = () =>{
     todos = JSON.parse(localStorage.getItem('todos') || [])
    todos.forEach(todo =>addTodo(todo) )
}

button.addEventListener("click", ()=>{
    todos.push(input.value)
    console.log(todos)
    localStorage.setItem('todos',JSON.stringify(todos))
    addTodo(input.value)
    input.value=""
})

function addTodo(todo){
       let items=document.createElement(`li`)
       items.innerText=`${todo}`;
       console.log(items)
       todoli.appendChild(items)

       items.addEventListener("click", ()=>{
        items.style.textDecoration = 'line-through'
       })

       items.addEventListener('dblclick',()=>{
        todoli.removeChild(items)
        remove(todo)
       })
}
function remove(todo){
    let index = todos.indexOf(todo)
    if(index >-1){
        todos.splice(index,1)
    }
    localStorage.setItem('todos',JSON.stringify(todos))
}
