import view from './view.js';
import task, {taskList}from './model.js';

const taskLt = new taskList();
const item = document.querySelector(".item");
function check(event){
			let me = document.getElementById(event.id);
			
			if (event.checked===true) { 
			 	
				me.style.backgroundColor = 'green'
				taskLt.setComplete(event.id);
				
			}else{
				
				me.style.backgroundColor = ''
				
				taskLt.setNotComplete(event.id);
				
			}
		}

		
function removeTodo( event ){
	taskLt.deleteElement(event.id);
	view(taskLt.allTask());
		}


document.querySelector(".todo-itm").addEventListener("click", a, false);
function a(params) {
	if (params.target.tagName === "BUTTON") {
		removeTodo(params.target.id);
	}
	else if (params.target.tagName === "INPUT") {
		check(params.target);

	}
}


		let AlButton = document.querySelector('.All');
		const completeButton = document.querySelector('.completed');
		const activeButton = document.querySelector('.active');



		completeButton.addEventListener('click',function(){

			view(taskLt.taskCompleted());
		});
		activeButton.addEventListener('click',function(){
			console.log(taskLt.taskActive());
			view(taskLt.taskActive());
		});
		AlButton.addEventListener('click', function(){
			console.log();
			view(taskLt.allTask());
		});
		

		
		item.addEventListener('submit',function(event){
			event.preventDefault();
			let ade =  document.getElementById('item').value;
			let Task = new task(ade);
			taskLt.add(Task);
			view(taskLt.allTask());
			console.log(taskLt.taskActive());
		});
