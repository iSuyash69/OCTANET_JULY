var inputBox=document.querySelector(".flex-item1 input");
var listContainer=document.querySelector(".list-container");

function addTask(){
    if(inputBox.value===''){
        alert("No input given ! Task can't be added ");
    }
    else{
        var li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        var span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("Checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
