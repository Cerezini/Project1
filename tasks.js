var Tasks = {
	bindEvents: function () {
		
	//document
		//.getElementById('insert-task-button')
		//.addEventListener('click', Tasks._handlerAddMajorTaskButton);
	
	document.getElementById('input').addEventListener('keypress',Tasks._inputMajorTaskHandler);
	},
	
	_inputMajorTaskHandler: function(e){
		//console.log(e.keyCode);
		if(e.keyCode === 13){
			Tasks._AddMajorTask(e);
		} else if(e.keyCode === 27){
			e.currentTarget.value = "";	
		}
	},
	
	_inputTaskHandler: function(e){
		//console.log(e.keyCode);
		if(e.keyCode === 13){
			Tasks._AddTask(e);
		} else if(e.keyCode === 27){
			//
		}
	},
	
	_inputTaskDescriptionHandler: function(e){
		if(e.keyCode === 13){
			Tasks._AddTaskDescription(e);
		} else if(e.keyCode === 27){
			//
		}	
	},
	
	_AddMajorTask: function (e) {
	
		var majorTaskDiv = document.createElement('div');
		majorTaskDiv.setAttribute('id','majorTask');
		majorTaskDiv.setAttribute('class',"col-md-3");
		
		var panelDiv = document.createElement('div');
		panelDiv.setAttribute('class',"panel panel-primary");
		
		var panelHead = document.createElement('div');
		panelHead.setAttribute('class',"panel-heading");
		
		var panelBody = document.createElement('div');
		panelBody.setAttribute('class',"panel-body");
		
		var title = document.getElementById('input').value;
		document.getElementById('input').value = "";
		
		var h2 = document.createElement('h2');
		h2.appendChild(document.createTextNode(title));
		h2.setAttribute('class',"panel-title");
		
		panelHead.appendChild(h2);
		panelDiv.appendChild(panelHead);
		
		//buttons
		var insertButton = document.createElement("button");
		insertButton.appendChild(document.createTextNode("New"));
		insertButton.setAttribute('class',"btn btn-xm btn-info");
		insertButton.addEventListener('click', Tasks._handlerNewTaskButton);
		
		var completedButton = document.createElement("button");
		completedButton.appendChild(document.createTextNode("Done"));
		completedButton.setAttribute('class',"btn btn-xm btn-success");
		
		var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("Del"));
		deleteButton.setAttribute('class',"btn btn-xm btn-danger");
		deleteButton.addEventListener('click', Tasks._handlerDeleteTaskButton);
		
		var taskPool = document.createElement("div");
		taskPool.setAttribute('id',"taskPool");
		taskPool.setAttribute('class',"row");
		
		panelBody.appendChild(insertButton);
		panelBody.appendChild(completedButton);
		panelBody.appendChild(deleteButton);
		panelBody.appendChild(taskPool);
		
		panelDiv.appendChild(panelBody);
		majorTaskDiv.appendChild(panelDiv);
		var pool = document.getElementById('pool');
		pool.appendChild(majorTaskDiv);
	},
	/*
	_handlerAddMajorTaskButton: function (e) {
	
		var majorTaskDiv = document.createElement('div');
		majorTaskDiv.setAttribute('id','majorTask');
		majorTaskDiv.setAttribute('class',"col-md-3");
		
		var panelDiv = document.createElement('div');
		panelDiv.setAttribute('class',"panel panel-primary");
		
		var panelHead = document.createElement('div');
		panelHead.setAttribute('class',"panel-heading");
		
		var panelBody = document.createElement('div');
		panelBody.setAttribute('class',"panel-body");
		
		//input
		var title = prompt('Title');
		
		var h2 = document.createElement('h2');
		h2.appendChild(document.createTextNode(title));
		h2.setAttribute('class',"panel-title");
		
		panelHead.appendChild(h2);
		panelDiv.appendChild(panelHead);
		
		//buttons
		var insertButton = document.createElement("button");
		insertButton.appendChild(document.createTextNode("New"));
		insertButton.setAttribute('class',"btn btn-xm btn-info");
		insertButton.addEventListener('click', Tasks._handlerAddTaskButton);
		
		var completedButton = document.createElement("button");
		completedButton.appendChild(document.createTextNode("Done"));
		completedButton.setAttribute('class',"btn btn-xm btn-success");
		
		var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("Del"));
		deleteButton.setAttribute('class',"btn btn-xm btn-danger");
		deleteButton.addEventListener('click', Tasks._handlerDeleteTaskButton);
		
		var taskPool = document.createElement("div");
		taskPool.setAttribute('id',"taskPool");
		taskPool.setAttribute('class',"row");
		
		panelBody.appendChild(insertButton);
		panelBody.appendChild(completedButton);
		panelBody.appendChild(deleteButton);
		panelBody.appendChild(taskPool);
		
		panelDiv.appendChild(panelBody);
		majorTaskDiv.appendChild(panelDiv);
		var pool = document.getElementById('pool');
		pool.appendChild(majorTaskDiv);
		/*
		var insertButton = document.createElement("button");
		insertButton.appendChild(document.createTextNode("Insert New"));
		insertButton.addEventListener('click', Tasks._handlerAddTaskButton);
		
		var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("Delete"));
		deleteButton.addEventListener('click', Tasks._handlerDeleteTaskButton);
		
		var completedButton = document.createElement("button");
		completedButton.appendChild(document.createTextNode("Done"));
		completedButton.addEventListener('click', Tasks._handlerCompletedTaskButton);

		
	},*/
	
	_AddTask: function (e) {
		
		var taskDiv = document.createElement('div');
		taskDiv.setAttribute('id',"subtask");
		taskDiv.setAttribute('class',"col-md-12");
		
		var panelDiv = document.createElement('div');
		panelDiv.setAttribute('class',"panel panel-default");
		
		var panelHead = document.createElement('div');
		panelHead.setAttribute('class',"panel-heading");
		
		var panelBody = document.createElement('div');
		panelBody.setAttribute('class',"panel-body");
				
		var title = e.currentTarget.value;
		
		var h2 = document.createElement('h2');
		h2.appendChild(document.createTextNode(title));
		h2.setAttribute('class',"panel-title");
		
		panelHead.appendChild(h2);
		panelDiv.appendChild(panelHead);
		
		var inputDescription = document.createElement('input');
		inputDescription.setAttribute('type',"text");
		inputDescription.setAttribute('placeholder',"Description");
		inputDescription.addEventListener('keypress',Tasks._inputTaskDescriptionHandler);
		
		panelBody.appendChild(inputDescription);
		panelDiv.appendChild(panelBody);
		taskDiv.appendChild(panelDiv);
		
		var poolDiv = e.currentTarget.parentNode.lastChild;
		poolDiv.insertBefore(taskDiv,poolDiv.firstChild);
		
		var father = e.currentTarget.parentNode;
		father.removeChild(e.currentTarget);
		/*
		var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("Delete"));
		//deleteButton.setAttribute('style','float:left');
		deleteButton.addEventListener('click', Tasks._handlerDeleteTaskButton);
		
		var completedButton = document.createElement("button");
		completedButton.appendChild(document.createTextNode("Done"));
		completedButton.addEventListener('click', Tasks._handlerCompletedTaskButton);*/
	},
	
	_AddTaskDescription: function(e){
		var description = e.currentTarget.value;
		var panelBody = e.currentTarget.parentNode;
		
		var p = document.createElement('p');
		p.appendChild(document.createTextNode(description));
		
		panelBody.replaceChild(p,e.currentTarget);
	},
	
	_handlerNewTaskButton: function (e) {
		var panelBody = e.currentTarget.parentNode;
		
		var inputTask = document.createElement('input');
		inputTask.setAttribute('type',"text");
		inputTask.setAttribute('placeholder',"Insert task name");
		inputTask.addEventListener('keypress',Tasks._inputTaskHandler);
		
		panelBody.insertBefore(inputTask, panelBody.lastChild);
	},
	
	
	
	_handlerDeleteTaskButton: function(e) {
	
		var currentDiv = e.currentTarget.parentNode.parentNode.parentNode;
		var parentDiv = currentDiv.parentNode;
		parentDiv.removeChild(currentDiv);
	},
	
	_handlerCompletedTaskButton: function(e) {
		
		var currentDiv = e.currentTarget.parentNode;
		var title = currentDiv.firstChild;
		title.innerHTML = '<s>' + title.innerHTML + '</s>';
	}
};

window.addEventListener('load', Tasks.bindEvents);
