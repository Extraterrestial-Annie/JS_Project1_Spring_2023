var l = localStorage.getItem("tasks");
var lCheck = localStorage.getItem("taskCheck");
let checkList = [];

if(lCheck != null){
    let checkArr = lCheck.split(",");
    checkArr.forEach(element => checkList.push(element))
    console.log(checkArr)
}
let taskList = [];

if(l != null){
    let lArr = l.split(","); 
    lArr.forEach(element => taskList.push(element))
}


function addObject() {
    var x = document.getElementById("myText");
    //console.log(x.value.match(","))
    if (x.value.length < 3) {
        alert("Task is too short!");
        document.getElementById("myText").style.outlineColor = "red";
        //x.setAttribute("style", "border-color: red !important; border-color: red !important")
        //x.setAttribute("style", "background-color: red !important")
    } else if (x.value.match(",") != null) {
        //console.log(x.value.match(","))
        alert("Task may not include commas!")
        document.getElementById("myText").style.outlineColor = "red";
    } else {
        //console.log(x.value)
        taskList.push(x.value)
        checkList.push(false)
        //console.log(taskList)
        localStorage.setItem("tasks", taskList)
        localStorage.setItem("taskCheck", checkList)
        document.getElementById("myText").style.outlineColor = "black";
        //console.log(localStorage.getItem("tasks"))
    }
    printTasks()
}
function printTasks() {

    var form =  document.forms.form1
    form.innerHTML = ""
    //console.log(form)
    for (var i in taskList) {
        let b = document.createElement("p")
        let taskinput =  document.createElement("input")
        taskinput.name = taskList[i]
        taskinput.type = 'checkbox' 
        taskinput.id = taskList[i] + 'box'
        taskinput.value = i
        if (checkList[i] != "false"){
            taskinput.checked = checkList[i]
        }
        taskinput.onchange = function(){check(this )};
        b.appendChild(taskinput)
        let tasklabel =  document.createElement("label")
        tasklabel.for = taskList[i] + 'box'
        tasklabel.innerHTML = taskList[i] 
        b.appendChild(tasklabel)
        let taskbutton =  document.createElement("button")
        taskbutton.type = "button"
        taskbutton.value = i 
        taskbutton.innerHTML= "remove"
        taskbutton.onclick = function(){remove(this )};
        b.appendChild(taskbutton)
        form.appendChild(b)
    }
    console.log(taskList)
    localStorage.setItem("tasks", taskList)
    //document.getElementById("myText").style.border = "black";
    //console.log(localStorage.getItem("tasks"))
    //console.log(taskList)
    //tasks.forEach((item) => {
    //  li.innerText = item;
    //  list.appendChild(li);



    //taskList.forEach(element => printTasks(element))
}
function remove(button) {
    console.log(button.value)
    taskList.splice(button.value, 1)
    checkList.splice(button.value, 1)
    console.log(taskList)
    localStorage.setItem("taskCheck", checkList)
    localStorage.setItem("tasks", taskList)
    printTasks()
    document.getElementById("myText").style.outlineColor = "black";
}

function check(checkbox) {
    console.log(checkbox.checked)
    checkList[checkbox.value] = checkbox.checked
    console.log(checkList)
    localStorage.setItem("taskCheck", checkList)
    printTasks()
    document.getElementById("myText").style.outlineColor = "black";
}
