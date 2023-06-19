function createHome() {
	const home = document.createElement('div')
	home.innerText = "ESTOU NA HOME!"
	return home
}

function loadHome() {
	const main = document.getElementById('main')
	console.log("entrei na load home")
	main.textContent = "";
	main.appendChild(createHome())
}

export default loadHome