const createBtn = document.querySelector('.header__crtBtn');
const saveBtn = document.querySelector('.save_btn');
const closeModalBtn = document.querySelector('.close_btn');
const closeXBtn = document.querySelector('.x_close');
const deleteBtn = document.querySelector('.delete_btn');
const cancelBtn = document.querySelector('.cancel_btn');
const closeModalDelete = document.querySelector('.modal_delete__close');
const modalBackground = document.querySelector('.modal_bkg');
const modalDltBackground = document.querySelector('.modal_delete_bkg');
const messageInp = document.querySelector('#modal_text');
const titleInp = document.querySelector('.modal__title');
const content = document.querySelector('.main__content');
const error = document.querySelector('.modal__error');
const tasks = document.querySelector('.main__tasks')




function openModal() {
    modalBackground.style.display = 'block';
}
function closeModal() {
    modalBackground.style.display = 'none'
}
createBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
closeXBtn.onclick = closeModal;
window.addEventListener('click', function(event){
    if(event.target == modalBackground){
        closeModal()
    }
})


const createElement = (tag, className, innerTxt) => {
    if(!tag){
        alert('Внутрення ошибка сервиса!')
        return
    }
    const element = document.createElement(tag);
    
    if(className){
        element.className = className
    }
    if(innerTxt){
        element.innerText = innerTxt;
    }
    return element;
}

const prependElement = () => {
    const check = createElement('input', 'main__checkbox')
    check.type = 'checkbox';
    const deleteBin = createElement('img', 'main__bin');
    deleteBin.src = './Vector-bin.png'
    const task = createElement('div', 'main__tasks');
    const title = createElement('h3','title',  titleInp.value);
    const text = createElement('p','text',messageInp.value);
    task.append(title, text, check, deleteBin);
    content.prepend(task);
    titleInp.value = '';
    messageInp.value = '';
    check.addEventListener('click', function(){
        if(check.checked){
            title.style.textDecoration = "line-through"
        }
    });
    const deleteTask = document.querySelector('.main__bin');
    deleteTask.addEventListener('click', function(){
        modalDltBackground.style.display = 'block'
    });
    const dltModalClose = () => {
        modalDltBackground.style.display = 'none'
    }
    deleteBtn.addEventListener('click', function(){
            task.remove();
            dltModalClose;
        
    })
    cancelBtn.addEventListener('click', dltModalClose);
    
    
    window.onclick = function(){
        if(event.target == modalDltBackground){
            modalDltBackground.style.display = 'none'
        }
    }
    closeModalDelete.addEventListener('click', dltModalClose)
}


saveBtn.addEventListener('click', function() {
    if(!titleInp.value){
            titleInp.style.border = '3px solid red'
            error.style.display = 'block';
        } else if(titleInp.value){
            titleInp.style.border = '1px solid #999'
            error.style.display = 'none'
            prependElement();
            closeModal();
        } else{
            prependElement();
        }
    } )

    const checkboxInp = document.querySelector('.main__checkbox')
    const strikeTitle = document.querySelector('.title')
    checkboxInp.addEventListener('click', function(){
        if(checkboxInp.checked){
            strikeTitle.style.textDecoration = "line-through"
        }
    })

    const deleteTask = document.querySelector('.main__bin');
    deleteTask.addEventListener('click',function(){
        modalDltBackground.style.display = 'block'
    })
    const dltModalClose = () => {
        modalDltBackground.style.display = 'none'
    }
    deleteBtn.addEventListener('click', function(){
        tasks.remove();
        dltModalClose();
    })
    cancelBtn.addEventListener('click', dltModalClose);
    window.onclick = function(){
        if(event.target == modalDltBackground){
            modalDltBackground.style.display = 'none'
        }
    }
    closeModalDelete.addEventListener('click', dltModalClose)