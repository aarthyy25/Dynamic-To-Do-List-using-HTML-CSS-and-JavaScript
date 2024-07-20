
// document.querySelector('#button').onclick = function(){
//     if(document.querySelector('.row input').value.length == 0){
//         alert("Kindly Enter Task Name!")
//     }
//     else{
//         document.querySelector('.row').innerHTML += `
//             <div class="task">
//                 <span id="taskname">
//                     ${document.querySelector('.row input').value}
//                 </span>
//                 <button class="delete">DELETE</button>
//             </div>
//         `;
//         var current_tasks = document.querySelectorAll(".delete");
//         for(var i=0; i<current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove();
//             }
//         }
//     }
// }
// function add(){
//     var res=string(document.getElementById("input").value);
//     var result=document.getElementByid("tasks");
//     result.innerHTML=res;

// }
// function add(){
//     const cel = String(document.getElementById("input").value)
//     const result = document.getElementById("in1")
//     result.innerHTML = cel;
// }
// function del(){
    
// }


document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}