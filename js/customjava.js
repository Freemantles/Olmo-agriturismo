			/*Navbar toggle*/

			function classToggle() {
  			const navs = document.querySelectorAll('.nav')
  
  			navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
			}
			document.querySelector('.navbar-toggle')
  			.addEventListener('click', classToggle);


  			/*Owl carousel*/

			$(document).ready(function(){
 			$(".owl-carousel, #slider-home").owlCarousel();
			});

			$('#gallery-carousel').owlCarousel({
			dots:true,
    		loop:true,
    		center:true,
    		autoWidth:false,
    		autoHeight:false,
    		margin:50,
    		nav:true,
    		responsive:{
        	0:{
            items:1,
            dots:false,
        	},
        	600:{
            items:1,
            dots:false,
        	},
        	1200:{
            items:2
        	}
    	}
	});



            $('#slider-home').owlCarousel({
            dots:false,
            loop:true,
            center:false,
            autoWidth:false,
            autoHeight:false,
            margin:50,
            nav:false,
            items:1,
            mouseDrag: false,
            autoplay:true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            autoplayTimeout: 7500,
    });



