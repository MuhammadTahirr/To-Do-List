let inputField = document.getElementById("search")
let taskContainer= document.getElementById("list-container")
const buttonClick=()=>{
if(inputField.value===""){
    alert("plz write some text to add")
}
else{
    let li = document.createElement("li")
    li.innerHTML=inputField.value
    taskContainer.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML="\u00d7"
    li.appendChild(span)   

}
inputField.value = ""
savedata()
}
taskContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        savedata()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        savedata()
    }
},false)
savedata = ()=>{
    localStorage.setItem("data",taskContainer.innerHTML)
}
showTask=()=>{
    taskContainer.innerHTML=localStorage.getItem("data")
}
showTask()