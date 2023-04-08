let subBtn = document.querySelector('#sub');
let taskInp = document.querySelector('#text-input')
let taskList = document.querySelector('#lists')
let resetbtn = document.querySelector('#removeFinished');
let totalTask = 0;


const addNewItem = () => {
    let value = taskInp.value;
    if (value == "") {
        return;
    }
    totalTask++;
    console.log(value);
    taskList.append(getNewLi(value));
    taskInp.value = "";
}

taskInp.addEventListener('keydown',(e)=>{
    if(e.key === "Enter"){
        addNewItem();
    }
})

const finishItem = (e) => {
    let li = e.target.parentElement
    let checkButton = e.target;
    li.classList.add('finish');
    checkButton.disabled = true;
}

resetbtn.addEventListener('click',()=>{
    let lis = document.querySelectorAll('li');
    for (const li of lis) {
        if(li.classList.contains('finish'))
            li.remove();    
    }
})

const getNewLi = (value) => {
    let li = document.createElement('li');
    let label = document.createElement('label')
    let checkButton = document.createElement('input')
    checkButton.type = 'checkbox'
    checkButton.id = totalTask;
    checkButton.addEventListener('change', finishItem)
    console.log(value);
    label.innerText = value;
    label.htmlFor = totalTask;
    label.classList.add('tag','is-large')
    li.append(label, checkButton);
    li.classList.add("list-container")
    return li;
}

subBtn.addEventListener('click', addNewItem)

