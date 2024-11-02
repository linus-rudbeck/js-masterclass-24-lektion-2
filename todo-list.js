console.log("Todo list js");

let todo = document.querySelector("#todo"); // Inputen
let add = document.querySelector("#add"); // Knappen
let todos = document.querySelector("#todos"); // Listan
let todoCount = document.querySelector("#todo-count"); // Output av antal

add.addEventListener("click", function(){

    let li = document.createElement("li"); // Skapa <li>-tagg
    li.innerText = todo.value; // Sätter innehållet till LI från input
    todos.appendChild(li); // Lägg till li i todos-listan
    todo.value = ""; // Återställ input

    let span = document.createElement("span"); // Skapa <span>
    span.innerText = "❌"; // Lägg in ett kryss i span-elementet
    li.appendChild(span); // Lägg in span i li

    span.addEventListener("click", function(){
        li.remove(); // Ta bort li-taggen

        // Uppdatera antalet när vi tar bort
        todoCount.innerText = "Todos count: " + todos.children.length;
    })

    // Uppdatera antalet när vi lägger till
    todoCount.innerText = "Todos count: " + todos.children.length;
})