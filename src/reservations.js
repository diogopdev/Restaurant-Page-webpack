function createReservations() {
	const reservations = document.createElement('div')
	reservations.innerText = "ESTOU NAS RESERVAS!"
	return reservations
}

function loadReservations() {
	const main = document.getElementById('main')
	console.log("entrei na load reservations")
	main.textContent = "";
	main.appendChild(createReservations())
}

export default loadReservations