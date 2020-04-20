const list = document.querySelector('.main-container main section.section-2 ul');
const fieldValue = document.querySelector('.main-container main section.section-3 form input');

list.addEventListener('click',function(e){
    if (e.target.className == "delete") {
        
        var li = e.target.parentElement;
        list.removeChild(li);
    }
})

const addTaskForm =  document.forms['addtask'];

addTaskForm.addEventListener('submit',function(e){
    e.preventDefault();
    var task = addTaskForm.children[1];
    if (task.value) {
        var newTaskCreate = list.firstElementChild.cloneNode(true);
        newTaskCreate.children[0].textContent = task.value;
        list.appendChild(newTaskCreate);
        task.value = ""
    }else{
        return false;
    }
})

const listItem = document.querySelectorAll('.main-container main section.section-2 ul li span.book-title');