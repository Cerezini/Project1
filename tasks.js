/*
document.getElementById('test-p').addEventListener('click', function (e) {
	console.log('p tratado', e.currentTarget);
}, false);

document.getElementById('test-strong').addEventListener('click', function (e) {
	console.log('strong tratado', e.currentTarget);
	
	e.stopPropagation();
}, false);

document.getElementById('test-a').addEventListener('click', function (e) {
	console.log('a tratado', e.currentTarget);
}, false); */


var Tasks = {
	bindEvents: function () {
		
	document
		.getElementById('insert-task-button')
		.addEventListener('click', Tasks._handlerAddMajorTaskButton);
	},
	
	_handlerAddMajorTaskButton: function (e) {
		
		var title = prompt('Title');
		
		var div = document.createElement('div');
		div.setAttribute('id',title);
		
		var insertButton = document.createElement("button");
		insertButton.appendChild(document.createTextNode("Insert task"));
		insertButton.addEventListener('click', Tasks._handlerAddTaskButton);
	
		var h2 = document.createElement('h2');
		h2.appendChild(document.createTextNode(title));
		
		div.appendChild(h2);
		div.appendChild(insertButton);
		var pool = document.getElementById('pool');
		pool.appendChild(div);
	},
	
	_handlerAddTaskButton: function (e) {
		
		var title = prompt('Task Title:');
		var description = prompt('Description:');
		
		var div = document.createElement('div');
		div.setAttribute('id',title);
		
		//delete button
		//var insertButton = document.createElement("button");
		//insertButton.appendChild(document.createTextNode("Insert task"));
		//button.addEventListener('click', Tasks._handlerAddTaskButton);
	
		var h3 = document.createElement('h3');
		h3.appendChild(document.createTextNode(title));
		var p = document.createElement('p');
		p.appendChild(document.createTextNode(description));
		
		div.appendChild(h3);
		div.appendChild(p);
		//div.appendChild(insertButton);
		var currentDiv = e.currentTarget.parentNode;
		currentDiv.appendChild(div);
	}
};
/*
var MajorTask = {
	title: 'taskTitle',
	tasksList: [],
};

var Task = {
	title: 'taskTitle',
	id: 'id',
	description: 'text',
};
*/
window.addEventListener('load', Tasks.bindEvents);
