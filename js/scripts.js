
(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        
       /* Preloader */
		
        $(window).on('load', function() {
          $('body').addClass('loaded');
        });
		
		
		
       /* Smooth Scroll */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
		


       
       /* Scroll Naviagation Background Change with Sticky Navigation */
		 
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });
		
		
		
		
       /* Mobile Navigation Hide or Collapse on Click */
		
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        
		 });
		 
		
		
		
        /* Scroll To Top */
		
        $(window).scroll(function(){
        if ($(this).scrollTop() >= 500) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
	   });
	
	
	    $('.scroll-to-top').click(function(){
		  $('html, body').animate({scrollTop : 0},800);
		  return false;
	    });
		
		
		
		
        /* Typed.js */
		
        $(window).load(function(){
        $(".typing").typed({
            strings: ["I am A Software Engineer.", "I am passionate about Web Development and Machine Learning."],    /* You can change the home section typing text from
	                                                                                            here and do not use "&" use "and" */
            typeSpeed: 50
          });
         });
        
		 
        /* Parallax Background */

        $(window).stellar({
            responsive: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            horizontalOffset: 0,
            verticalOffset: 0,
        });

        
		
		
        /* Portfolio Filtering */

        $('.portfolio-inner').mixItUp();


       
        /* Magnific Popup */

        $('.portfolio-popup').magnificPopup({
            type: 'image',
			
            gallery: { enabled: true },
			zoom: { enabled: true,
			        duration: 500
					
          },
		  
         image:{
               markup: '<div class="mfp-figure portfolio-pop-up">'+
               '<div class="mfp-close"></div>'+
               '<div class="mfp-img"></div>'+
               '<div class="mfp-bottom-bar portfolio_title">'+
               '<div class="mfp-title"></div>'+
               '<div class="mfp-counter"></div>'+
               '</div>'+
               '</div>',

               titleSrc:function(item){
                return item.el.attr('title');
              }
            }
		  
		  
          });

       
	   
		 
        /* Testimonial Carousel/Slider */

        $(".testimonial-carousel-list").owlCarousel({
            items: 1,
            autoPlay: true,
            stopOnHover: false,
            navigation: true,
            navigationText: ["<i class='fa fa-long-arrow-left fa-2x owl-navi'></i>", "<i class='fa fa-long-arrow-right fa-2x owl-navi'></i>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: false,
            transitionStyle : "backSlide"
        });
		
		
		
		
        /* Statistics Counter */
		
        $('.statistics').appear(function() {
           var counter = $(this).find('.statistics-count');
           var toCount = counter.data('count');
      
           $(counter).countTo({
           from: 0,
           to: toCount,
           speed: 5000,
           refreshInterval: 50
           })
           });

        $('#contact-form').on('submit',function(e) {  //Don't foget to change the id form
            $.ajax({
                url:'contact.php', //===PHP file name====
                data:$(this).serialize(),
                type:'POST',
                success:function(data){
                    console.log(data);
                    //Success Message == 'Title', 'Message body', Last one leave as it is
                    document.getElementById("contact-form").reset();
                    swal("Success!", "Message sent!", "success");
                },
                error:function(data){
                    //Error Message == 'Title', 'Message body', Last one leave as it is
                    swal("Oops...", "Something went wrong :(", "error");
                }
            });
            e.preventDefault(); //This is to Avoid Page Refresh and Fire the Event "Click"
        });
		  
         
         /* Google Map */
		 
         $('#my-address').gMap({
            zoom: 5,
            scrollwheel: true,
            maptype: 'ROADMAP',
            markers:[
            {
            address: "Texas",  /* You can change your address from here */
            html: "<b>Address</b>: <br> Wichita Falls, Texas.",   /* You can change display address text from here */
            popup: true
            }
            ]
            });
              
		   
            });

   })(jQuery);