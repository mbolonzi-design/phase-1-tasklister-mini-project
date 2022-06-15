document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    createToDo(e.target.newTask.value)
    form.reset()
  })
});

function createToDo(newTodo){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.textContent = 'x'
  li.textContent = `${newTodo}`
  li.appendChild(btn)
  console.log(li)
  document.querySelector('#task').appendChild(li)
  btn.addEventListener('click', (e) => e.target.parentNode.remove())
}