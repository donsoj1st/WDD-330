class task{
			constructor(task, completed = false){
				this.task = task;
				this.completed = completed;
			}
		}


		class taskList{
			constructor(){
				this.taskList = [];
			}
			add(task){

				this.taskList.push(task);
			}

			taskCompleted(){
				return this.taskList.filter(task =>task.completed == true);
			}

			taskActive(){
				return this.taskList.filter(task =>task.completed === false);
			}
			allTask (){return this.taskList;}
			setComplete( id ){
				this.taskList[id].completed =true;
			}
			setNotComplete( id ){
				this.taskList[id].completed =false;
			}
			deleteElement( id ){
				this.taskList.splice( id, 1 );

			}
		}

		const taskLt = new taskList();
		const item = document.querySelector(".item");


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

		function view(ListItems){
			if (ListItems.length === 0) {
				let todo = document.querySelector(".todo-itm");
			    todo.innerHTML = "";
			}
			else{
				    let todo = document.querySelector(".todo-itm");
			     	todo.innerHTML = "";
			     	
				for (var i = ListItems.length - 1; i >= 0; i--) 
				{
					
					
					console.log(ListItems[i].task);
					let div = document.createElement('div');
					let input = document.createElement('input');
					let button = document.createElement('button');
					let text = document.createElement('p');
					button.appendChild(document.createTextNode('X'));
					text.appendChild(document.createTextNode(ListItems[i].task));
					input.setAttribute('type','checkbox');
					input.setAttribute('onclick','check(this)');
					button.setAttribute('onclick','removeTodo(this)');
					div.setAttribute('id',i);
					input.setAttribute('id',i);
					button.setAttribute('id',i);
					text.setAttribute('class',i);
					button.style.backgroundColor = 'red'
					div.style.margin ='2px';
					div.backgroundColor ='#2b1b17'
					div.appendChild(input);
					div.appendChild(text);
					div.appendChild(button);
					todo.appendChild(div)
					if (ListItems[i].completed == true) {
						input.checked = true;
						check(input);
						}
					todo.style.margin = 'auto';
					todo.style.width= '600px'
					
				}
			
			}
		}
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