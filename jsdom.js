const { JSDOM } = require('jsdom')
const { document } = new JSDOM(
	'<h2 class="title">Hello world</h2>'
).window
const heading = document.querySelector('.title')
heading.textContent = 'Hello there!'
heading.classList.add('welcome')

console.log(heading.innerHTML)