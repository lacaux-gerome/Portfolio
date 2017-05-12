	var list = document.querySelectorAll('.containerCarrousel p');
	var id = 0;
	var index = 0;

	/*--------------FONCTION AU CLICK---------------*/

function function_name(argument) {	
	for (var i = 0; i < list.length; i++) {
		this.list[i].addEventListener('click',function(){
		active = document.querySelector('.containerCarrousel .active');
		var id = this.id;	
		main_page.style.transform = "translateY(calc(-" + id * 100 + "vh))";
		active.classList.remove('active');
		this.classList.add('active');
		var index = id;
		})
	}
}

	/*--------------FONCTION AU SCROLL---------------*/

	/*----------------Timer pour éviter de "trop vite scroll"-----------*/

	var timer;
	var done = false;

	window.addEventListener("wheel", function(e){
		if (!done) {
			handleWheel(e);
			done = true;
		}

		clearTimeout(timer);

		timer = setTimeout(function (){
			console.log('in timer');
			done = false;
		}, 50);
		
	});

	/*--------------Fonction du scroll-----------------*/
	

	function handleWheel(event){
			if (event.deltaY > 0) {
				if (index >= 0 && index < 4) {
						console.log(index);
	        			list[index].classList.remove('active');
						index++;
						list[index].classList.add('active');
						main_page.style.transform = "translateY(calc(-" + index * 100 + "vh))";
						main_page.style.transition = 'all 2s ease-in-out';
					}			
			}
			else{
				if (index > 0) {
	        			list[index].classList.remove('active');
						index--;
						console.log(index);
						list[index].classList.add('active');
						main_page.style.transform = "translateY(calc(-" + index * 100 + "vh))";
					}			
			}
		}


var nav = document.querySelector('.containerNav');
var menu = document.querySelector('.containerGlobalMenu');
var carrousel = document.querySelector('.containerCarrousel')
var main_page = document.querySelector('.mainPage');
var menuDefault = document.querySelector('.menu-link-default-txt');;
var menuHover = document.querySelector('.menu-link-hover');
var menudiv1 = document.querySelector('.strait1');
var menudiv2 = document.querySelector('.strait2');
var menudiv3 = document.querySelector('.strait3');
var scrollDown = document.querySelector('.scrollArrow');

/*Affichage des lettres dans le menu.*/

	var listMenu = document.querySelectorAll('.listMenu li');
	var bigLetter = document.querySelector('.bigLetter');
	var mot = "";
	var letter = " ";

	for (var w = 0; w < listMenu.length; w++) {
		listMenu[w].addEventListener('mouseover', function(z) {
			mot = z.target.innerHTML;
			letter = mot[0];
			bigLetter.innerHTML = letter;
		});
		listMenu[w].addEventListener('mouseleave', function(z) {
			bigLetter.innerHTML = " ";
		});
	}


	menu.addEventListener('click',function() {
		bigLetter.innerHTML = "";
		if (nav.style.display === 'block') {
			nav.style.display = 'none';
			carrousel.style.display = 'block';
			main_page.style.display = 'block';			
			menuDefault.innerHTML = 'Menu';
			menuHover.innerHTML = 'Menu';
			menudiv1.style.transform = 'rotate(0deg)';
			menudiv2.style.transform = 'translateX(15px)';
			menudiv3.style.transform = 'rotate(-0deg)';
			menudiv3.style.width = '4px';
		}

		else{
			scrollDown.style.display = 'none';
			carrousel.style.display = 'none';
			nav.style.display = 'block';
			main_page.style.display = 'none';
			menuDefault.innerHTML = 'Close';
			menuHover.innerHTML = 'Close';
			menudiv1.style.width = '21px';
			menudiv1.style.transform = 'rotate(40deg) translateY(6px)';
			menudiv2.style.transform = 'translateX(50px)';
			menudiv3.style.transform = 'rotate(136deg) translateY(6px)';
			menudiv3.style.width = '21px';
		}		
	});

	var contactContainer = document.querySelector('.containerContact');
	var contact = document.querySelector('.contactLink');

	contact.addEventListener('click', function(){
		nav.style.display = 'none'
		contactContainer.style.display = 'block';
		aboutContainer.style.display = 'none';
		menuDefault.innerHTML = 'Menu';
		menuHover.innerHTML = 'Menu';
		menudiv1.style.transform = 'rotate(0deg)';
		menudiv2.style.transform = 'translateX(15px)';
		menudiv3.style.transform = 'rotate(-0deg)';
		menudiv3.style.width = '4px';
	})

	var aboutContainer = document.querySelector('.containerAbout');
	var about = document.querySelector('.aboutLink');

	about.addEventListener('click', function(){
		nav.style.display = 'none'
		aboutContainer.style.display = 'block';
		contactContainer.style.display = 'none';
		menudiv1.style.transform = 'rotate(0deg)';
		menudiv2.style.transform = 'translateX(15px)';
		menudiv3.style.transform = 'rotate(-0deg)';
		menudiv3.style.width = '4px';
		menuDefault.innerHTML = 'Menu';
		menuHover.innerHTML = 'Menu';
	})

	var home = document.querySelector('.homeLink');

	home.addEventListener('click', function(){
		nav.style.display = 'none';
		main_page.style.display = 'block';
		menudiv1.style.transform = 'rotate(0deg)';
		menudiv2.style.transform = 'translateX(15px)';
		menudiv3.style.transform = 'rotate(-0deg)';
		menudiv3.style.width = '4px';
		menuDefault.innerHTML = 'Menu';
		menuHover.innerHTML = 'Menu';
		carrousel.style.display = 'block';
		scrollDown.style.display = 'block';
	})