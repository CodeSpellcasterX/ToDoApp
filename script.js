let input = document.querySelector(".task-input");
let ul = document.querySelector(".task-list");
let lists = document.querySelectorAll(".task-list li");

function taskDeleter(e) {
    e.currentTarget.remove();
}

for(let i = 0; i < lists.length; i++) {
    lists[i].addEventListener("dblclick", taskDeleter);
}

input.addEventListener("keypress", function(e) {
    if(e.key == "Enter") {
        let task = input.value;
        if(task == "") {
            alert("Error- Adding Empty task");
            return;
        }
        input.value = "";
        // let li = `<li>${task}</li>`;
        // let mli = ul.innerHTML;
        // let finalHtml = li + mli;
        // ul.innerHTML = finalHtml;

        var li = document.createElement("li");
        li.innerText = task;
        li.classList.add("tasklist-item");
        li.addEventListener("dblclick", taskDeleter);
        ul.insertBefore(li, ul.firstChild);
    }
    
})



// let input = document.querySelector(".task-input");
// let ul = document.querySelector(".task-list");

// let lists = document.querySelectorAll(".task-list")

// // event creation - jb bhi input pr enter ho

// // function(e) tbhi trigger hoga jb bhi koi event create hota h
// input.addEventListener("keypress",function(e){
//     console.log(e);
//     if(e.key=="Enter"){
//         let task = input.value;   //e.target.value se bhi ho jayega
//         // console.log(task);   
//         if(task==""){
//             alert("Error - Adding Empty task");
//             return;
//         }
//         input.value="";
//         let li = document.createElement('li');
//         li.innerText = task;
//         li.addEventListener("dblclick",deleteit);
//         ul.appendChild(li);  // yeh seedha append krega like queue jo last mein dalega woh last mein jayega
//         ul.insertBefore(li,ul.firstChild); // To enter elements stack wise jo last mein add hua woh pphle hoga
//     }
// });
