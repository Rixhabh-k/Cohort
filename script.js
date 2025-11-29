var input = document.querySelector('#task-input')

var add = document.querySelector('#add-task')

var ul = document.querySelector('#ul-task-list')

add.addEventListener('click',()=>{
    
    var li = document.createElement('li')
    

    li.innerHTML = `<span>${input.value.trim()}</span>

                            <div class="task-actions">
                                
                                <button class="delete"><i class="ri-delete-bin-6-fill"></i></button>
                            </div>`

    ul.appendChild(li);

    input.value = ""

    // task delete logic

    ul.addEventListener('click',(e)=>{
        const deleteBtn = e.target.closest('.delete')

        if (deleteBtn) {
        const li = deleteBtn.closest('li');
        if (li) li.remove();
    }
        
    })

    // task complete logic 

    var liFlag = 0;

    

    li.addEventListener('click',()=>{
        if(liFlag===0){
            li.style.textDecoration = "line-through"
            li.style.backgroundColor = "gray"
            li.style.fontStyle = "italic"
            liFlag = 1;
        }else{
            li.style.textDecoration = "none"
            li.style.backgroundColor = "rgb(255, 186, 186)"
            li.style.fontStyle = "normal"
            liFlag = 0;
        }
    })
                            
})        