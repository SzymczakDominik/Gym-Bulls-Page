document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const navbar = document.querySelector('.navbar-collapse')
	const topshadow = document.querySelectorAll('.nav-link')
	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	function addTopShadow() {
		if (window.scrollY <= 100) {
			nav.classList.add('shadow-bg')
		}
	}

	function removeTopShadow() {
		if (window.scrollY <= 100) {
			topshadow.classList.remove('shadow-bg')
		}
	}
	function remshow() {
		if (navbar.classList.contains('show')) {
			navbar.classList.remove('show')
		}
	}

	window.addEventListener('dblclick', removeTopShadow)
	window.addEventListener('click', addTopShadow)
	navbar.addEventListener('click', remshow)
	window.addEventListener('scroll', addShadow)
})
