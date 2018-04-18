$(document).ready(function() {
	if (localStorage.getItem('myLibrary')){
		var myLibrary = JSON.parse(localStorage.getItem('myLibrary'))
	}
	else{
		var myLibrary = [];
	}
	function book(index, name, author, pages, readed){
		this.index = index
		this.name = name;
		this.author = author;
		this.pages = pages;
		this.readed = readed;
	};

	function addBookToLibrary(obj) {
		myLibrary.push(obj);
	}

	$('#submit').on('click', function(e) {
		let name = $('#name').val();
		let author = $('#author').val();
		let pages = $('#pages').val();
		let readed = $('#readed').val();
		if (name && author && pages) {
			let new_book = new book(myLibrary.length,name, author, pages, readed);
		  addBookToLibrary(new_book);
		  console.log(myLibrary);
		  $('#alert').addClass('hidden');
		  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
		  window.open("index.html","_self")
		}
		else {
			$('#alert').removeClass('hidden');
		}
		e.preventDefault();
	})

	let view = JSON.parse(localStorage.getItem('myLibrary'));
	for (let i = 0; i< view.length; i++) {
		$('#display').append('<tr><td>' + view[i].name + '</td> <td>' + view[i].author  + '</td> <td>' + view[i].pages + '</td> <td>' + view[i].readed + "</td><td><button class='btn btn-danger' id="+ i + ">Delete</button></td></tr>")
	}

	$('.btn-danger').on('click', function() {
		let view = JSON.parse(localStorage.getItem('myLibrary'));
		view.splice($(this).attr('id'), 1);
		$(this).parent().parent().remove();
		localStorage.setItem('myLibrary', JSON.stringify(view));
	})
})