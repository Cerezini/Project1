var Tasks = {
	bindEvents: function () {
		
	document
		.getElementById('insert-task-button')
		.addEventListener('click', Tasks._handlerAddMajorTaskButton);
	},
	
	_handlerAddMajorTaskButton: function (e) {
		
		var title = prompt('Title');
		
		var div = document.createElement('div');
		div.setAttribute('id','majorTask');
		div.setAttribute('class',"col-md-3");
		
		var insertButton = document.createElement("button");
		insertButton.appendChild(document.createTextNode("Insert New"));
		insertButton.addEventListener('click', Tasks._handlerAddTaskButton);
		
		var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("Delete"));
		deleteButton.addEventListener('click', Tasks._handlerDeleteTaskButton);
		
		var completedButton = document.createElement("button");
		completedButton.appendChild(document.createTextNode("Done"));
		completedButton.addEventListener('click', Tasks._handlerCompletedTaskButton);
	
		var h2 = document.createElement('h2');
		h2.appendChild(document.createTextNode(title));
		
		div.appendChild(h2);
		div.appendChild(insertButton);
		div.appendChild(deleteButton);
		div.appendChild(completedButton);
		var pool = document.getElementById('pool');
		pool.appendChild(div);
	},
	
	_handlerAddTaskButton: function (e) {
		
		var title = prompt('Task Title:');
		var description = prompt('Description:');
		
		var div = document.createElement('div');
		div.setAttribute('id','subtask');
		
		var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("Delete"));
		deleteButton.addEventListener('click', Tasks._handlerDeleteTaskButton);
		
		var completedButton = document.createElement("button");
		completedButton.appendChild(document.createTextNode("Done"));
		completedButton.addEventListener('click', Tasks._handlerCompletedTaskButton);
	
		var h3 = document.createElement('h3');
		h3.appendChild(document.createTextNode(title));
		var p = document.createElement('p');
		p.appendChild(document.createTextNode(description));
		
		div.appendChild(h3);
		div.appendChild(deleteButton);
		div.appendChild(completedButton);
		div.appendChild(p);
		var currentDiv = e.currentTarget.parentNode;
		currentDiv.appendChild(div);
	},
	
	_handlerDeleteTaskButton: function(e) {
	
		var currentDiv = e.currentTarget.parentNode;
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
