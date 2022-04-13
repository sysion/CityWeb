const nav = document.querySelector('nav');
const toggleMenu = document.querySelector('.toggle__menu');
const navLinkItems = document.querySelectorAll('nav ul li a');
const contactForm = document.querySelector('.contact__form');
const contactSubmit = document.querySelector('#submit');

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


function submitMessage(){
	let formData = {};
	let contactInputs = contactForm.querySelectorAll('.contact__input');

	contactInputs.forEach(function(inp){
		formData[inp.name] = inp.value;
		console.log("inp.name => "+inp.name+", inp.value => "+inp.value);
	});
	console.log("formData.name => "+formData.name);
	contactInputs.forEach(function(inp){
		inp.value = '';
	});
}

//contactSubmit.addEventListener('click', submitMessage);  	//ok
contactForm.addEventListener('submit', submitMessage);

//https://www.cssscript.com/10-best-smooth-scroll-javascript-plugins/