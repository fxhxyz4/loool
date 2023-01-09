const btn = document.getElementById('btn')
const div = document.getElementById('div')
const heh = document.getElementById('heh')
let huh = document.getElementById('huh2')
let lul = document.getElementById('huh')
alert(`epilepsy warning`)

btn.addEventListener('click', function () {
	div.classList.remove(`is-hidden`)
})

heh.addEventListener('click', function () {
	div.classList.add(`is-hidden`)
	document.getElementsByClassName('main')[0].style.height = '100%'
	document.getElementById('lol').textContent = "lol i'm scam you 😂🤣😂🤣"
	btn.classList.add(`is-hidden`)
})

huh.disabled = false
lul.disabled = false

huh.addEventListener('click', function () {
	lul.checked = true
	huh.disabled = true
})
