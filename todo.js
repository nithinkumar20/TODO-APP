

function addItems (){
	var text = document.getElementById("item").value;
	if(!text) {
		alert("enter the proper work");
	}else
	{
		addTodo(text);
		
		document.getElementById("item").value='';

	}
}

//remove item
function removeItem (){
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	
	parent.removeChild(item);
}

//success to move from to do to done list
function successItem (){
	var item = this.parentNode.parentNode;	
	var list = document.getElementById('redo');
	list.appendChild(item);
	
}

function addTodo(text) {
	var list = document.getElementById('todo');
	
	var item = document.createElement('li');
	item.innerHTML = text;
	
	var buttons = document.createElement('div');
	buttons.classList.add('buttons');
	
	var remove = document.createElement('button');
	remove.classList.add('remove');
	
	
	var success = document.createElement('button');
	success.classList.add('success');
	
	
	buttons.appendChild(remove);
	buttons.appendChild(success);
	item.appendChild(buttons);
	
	//list.appendChild(item);//1st up next down
	list.insertBefore(item, list.childNodes[0]);//1st down next up
	
	// to add romove option
	remove.addEventListener("click",removeItem);
	
	//to add succeess option
	success.addEventListener("click",successItem);
}

