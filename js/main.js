const NAV = document.getElementById('#nav')

window.addEventListener('scroll', function() {
	NAV.classList.toggle('active', window.scrollY > 0 )
})