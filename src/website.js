import loadHome from "./home.js"
import loadReservations from "./reservations.js"

function createHeader() {
	console.log("Criei um Header")
	const header = document.createElement('div')
	header.classList.add('header')

	const headerName = document.createElement('div')
	headerName.classList.add('header-name')
	headerName.textContent='SportsBar Lisboa'

	content.appendChild(header)
	header.appendChild(headerName)

	return header
}

function createMenu() {
	console.log("Criei um Menu")
	const menu = document.createElement('div')
	menu.classList.add('menu')

	const menuItem = document.createElement('button')
	menuItem.classList.add('menu-item', 'active')
	menuItem.setAttribute("id", "home")
	menuItem.textContent = 'Home'
	menuItem.addEventListener("click", (e) => {
		console.log("Clicaste na home")
		if (e.target.classList.contains("active")) return;
		setActiveButton(menuItem)
		loadHome()
	})

	const menuItem2 = document.createElement('button')
	menuItem2.classList.add('menu-item')
	menuItem2.setAttribute("id", "reservations")
	menuItem2.textContent = 'Reservations'
	menuItem2.addEventListener("click", (e) => {
		console.log("Clicaste nas reservas")
		if (e.target.classList.contains("active")) return;
		setActiveButton(menuItem2)
		loadReservations()
	})

	createHeader().appendChild(menu)
	menu.appendChild(menuItem)
	menu.appendChild(menuItem2)
}

function setActiveButton(button) {
	const buttons = document.querySelectorAll('.menu-item');
  
	buttons.forEach((btn) => {
	  if (btn !== button) {
		btn.classList.remove('active');
	  }
	});
  
	button.classList.add('active');
  }

function createMain() {
	console.log("Criei um Main")
	const main = document.createElement('div')
	main.classList.add('main')
	main.setAttribute("id", "main")
	content.appendChild(main)
}

function startWebsite() {
	const content = document.getElementById('content')
	console.log("Comecei o Website")
	createMenu()
	createMain()
	loadHome()
}

export default startWebsite;