$(document).ready(function() {
					   
	 // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 10)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
	
	
	// Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })
	
		$( document ).on( "click", ".navbar-toggle", function() {
			$('.mainmenu').fadeIn();
                $('.submenu').fadeOut();
		});
		
		if($(window).width()>767){
			$(window).scroll(function () {
				if ($(this).scrollTop() > 700) {
					$('.mainmenu').fadeIn();
					$('.submenu').fadeOut();
				}
				if ($(this).scrollTop() < 700){
					$('.mainmenu').fadeOut();
					$('.submenu').fadeIn();
				}
			});	
		}
		
		$( window ).resize(function() {
			if($(window).width()>767){
				$(window).scroll(function () {
					if ($(this).scrollTop() > 700) {
						$('.mainmenu').fadeIn();
						$('.submenu').fadeOut();
					}
					if ($(this).scrollTop() < 700){
						$('.mainmenu').fadeOut();
						$('.submenu').fadeIn();
					}
				});	
			}
	 
		});
  		
	
		$(".signinbut").click(function(){
			$(".signin").animate({
			top: "0px"
			}, "8000");
			$(".consumer_form").hide();
			$(".signin_form").show();
		});
			
		$(".consumerbut").click(function(){
			$(".signin").animate({
			top: "0px"
			}, "8000");
			$(".signin_form").hide();
			$(".consumer_form").show();
		});

		$(".signclose").click(function(){
			$(".signin").animate({
			top: "-100%"
			}, "8000");
			$(".signin_form").hide();
			$(".consumer_form").hide();
		});	
		 
		$(window).scroll(function(){
			if($(this).scrollTop()>200){
			  $(".uparrow").fadeIn(200);
			}
			else{
			  $(".uparrow").fadeOut(200);  
			}
		 });
		 
		$('#contact_form').submit(function(e) { 
			e.preventDefault();
			if ( $(this).parsley().isValid() ) {
				$.ajax({
					  type: "POST",
					  url: "mailform.php",
					  data: $(this).serialize(),
						}).done(function( msg ) {
						$(".contacterror").css("color","green").text( "" + msg );
						$("#c1").val("");
						$("#c2").val("");
						$("#c3").val("");
						$("#c4").val("");
				});
			}
		});
		
			 
		
		
  
		$('.modal').on('show.bs.modal', function () {
			//$('.modal-content').css('overflow-y', 'auto'); 
			$('.modal-content').css('height',$( window ).height()*0.9);
			$('.custom-frame').css('height',$( window ).height()*0.8);
			$('.custom-frame').css('overflow-y', 'auto');
		});
		
		
		if(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream){
			document.querySelector('meta[name=viewport]')
			.setAttribute(
			'content',
			'initial-scale=1.0001, minimum-scale=1.0001, maximum-scale=1.0001, user-scalable=no'
		);
		}
		 
		if($(window).width()<1080){
			$('.btnModal').click(function (e) {
				e.preventDefault();
				$('#modal').toggle();
				scrollTo = $('body').scrollTop();
				$('body').css("position", "fixed");
			});

			$('.closeModal').click(function (e) {
				e.preventDefault();
				$('#modal').toggle();
				$('body').css("position", "static");
				$('body').animate({scrollTop: scrollTo}, 0);
			});
		}
		/*$(".modal").on("hidden.bs.modal", function() {
			$(".modal-content").attr('data-refresh') == 'true');
		});
				
		
		window.resizeIframe = function () {
			var frame = $('.custom-frame');
			var modalHeight = $('.custom-frame').contents().height();
			frame.height(modalHeight);

			$(window).resize(function() {
            frame.height(modalHeight);
			});
		};
		
		function filterPath(string) {
		return string
		  .replace(/^\//,'')  
		  .replace(/(index|default).[a-zA-Z]{3,4}$/,'')  
		  .replace(/\/$/,'');
		}
		
		$('a[href*=#]').each(function() {
		if ( filterPath(location.pathname) == filterPath(this.pathname)
		&& location.hostname == this.hostname
		&& this.hash.replace(/#/,'') ) {
		  var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
		  var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
		   if ($target) {
			 var targetOffset = $target.offset().top;
			 $(this).click(function() {
			  $.fancybox.close();
			   $('html, body').animate({scrollTop: targetOffset}, 2000);
			   return false;
			 });
		  }
		}
		});
		
		$(".fancybox-html").fancybox({ 

		autoWidth   : true,
		autoSize    : true, 
		closeClick  : false, 
		fitToView   : true, 
		scrolling   : 'visible',
		openEffect  : 'fade', 
		closeEffect : 'none', 
		type : 'iframe' ,
		
		onComplete : (function(){
			$('.fancybox-inner').slimScroll();
			})
		});*/
		
				
		
					
		/*function CCPopUp(SEALURL){
			window.open(""+SEALURL+"", "win",'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=700,height=585');
			self.name = "mainWin";
		}*/
    
}); // (jQuery)End of use strict
