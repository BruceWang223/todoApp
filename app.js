var things = document.querySelector("ul");

things.addEventListener('click',function(event){
	if(event.target.className == 'fas fa-trash'){
		things.removeChild(event.target.parentElement.parentElement);
	}
	else{
		event.target.classList.toggle('lineThrough');
	}
});

var addForm = document.forms['add-toDo'];
addForm.querySelector('button').addEventListener('click',function(event){
	event.preventDefault();
	var valuefield = addForm.querySelector('input[type ="text"]');
	var value = valuefield.value;
	if(value !== ''){
		var li = document.createElement('li');
		var deleteSpan = document.createElement('span');
		var iTag = document.createElement('i');
		deleteSpan.appendChild(iTag);
		li.appendChild(deleteSpan);
		deleteSpan.classList.add('delete');
		iTag.classList.add('fas');
		iTag.classList.add('fa-trash');

		li.innerHTML += value;
		console.log();
		things.appendChild(li);
		valuefield.value = '';
	}
})

var searchForm = document.forms['search-toDo'];
searchForm.addEventListener('submit',function(event){
	event.preventDefault();
})

searchForm.querySelector('input[type="text"]').addEventListener('keyup',function(event){
	var valuefield = event.target;
	var value = valuefield.value.toLowerCase();
	things.querySelectorAll('li').forEach(function(element){
		var content = element.textContent.toLowerCase();
		if(content.indexOf(value) != -1){
			element.style.display = 'block';
		}
		else{
			element.style.display = 'none';
		}
	})
});







