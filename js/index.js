const btn = document.getElementById('btn')
const div = document.getElementById('div')
const heh = document.getElementById('heh')
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
