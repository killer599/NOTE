function addNote() {
	let input_element = document.querySelector('#input-place')
	let new_note = document.querySelector('#note-demo').cloneNode(true)

	new_note.removeAttribute('id')
	new_note.querySelector('.number').innerHTML = document.querySelector('#content').querySelectorAll('.note').length
	new_note.querySelector('.literal').innerHTML = input_element.value

	document.querySelector('#content').appendChild(new_note)
}

function removeAll() {
	const content = document.querySelector('#content')
	const notes = content.querySelectorAll('.note')

	for (let i = 1; i < notes.length; i++) {
		content.removeChild(notes[i])
	}
}

function numbers(){
	const content = document.querySelector('#content')
	const numbers = content.querySelectorAll('.note')
	for(let i = 1 ; i < numbers.length ; i++){
		numbers[i].querySelector('.number').innerHTML = i
	}
}

function remove(target){
	target.parentNode.removeChild(target)
	numbers()
}
function reverse() {
	const content = document.querySelector('#content')
	const notes = content.querySelectorAll('.note')
	removeAll()
	for(let i= notes.length-1 ; i>=1 ; i--){
		notes[i].querySelector('.number').innerHTML = notes.length - i
		document.querySelector('#content').appendChild(notes[i])
	}
}

function highLight(target){
	target.style.height ='80px'
}

function lowLight(target){
	target.style.height='60px'
}

let ii=0
function changeBackground(){
	let photos = ["url(faze.jpg)","url(faze2.jpg)","url(faze3.jpg)","url(frozen.jpg)"]
	document.body.style.backgroundImage = photos[ii]
	ii=(ii+1)%photos.length
}