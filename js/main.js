const nav = document.querySelector('nav');
const toggleMenu = document.querySelector('.toggle__menu');
const navLinkItems = document.querySelectorAll('nav ul li a');

//show/hide mobile menu
toggleMenu.addEventListener('click', function(){
	nav.classList.toggle('show__menu');
});

navLinkItems.forEach(function(navItem){
	navItem.addEventListener('click', function(){
		//hide mobile menu when link item clicked
		nav.classList.remove('show__menu');

		//remove .active__menu class on all link item
		navLinkItems.forEach(function(navItem){
			navItem.classList.remove('active__menu');
		});

		//add .active__menu class to clicked link item
		this.classList.add('active__menu');
	});
});