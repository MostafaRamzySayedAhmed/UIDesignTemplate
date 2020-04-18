// For Avoiding JS Lint Warnings
/* global $, alert, console */

$(function () {
   
    'use strict';
    
    // Triggering The "Nice Scroll" Library
    
    $('html').niceScroll({
        
        cursorcolor: '#f7600e',
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: '1px solid #f7600e'
        
    });
    
    // Changing The Header Height
    
    $('.header').height($(window).height());
    
    // Scrolling To The Features Section
    
    $('.header .arrow i').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('.features').offset().top
            
        }, 1000);
        
    });
    
	// Scrolling To The "Our Team" Section
	
    $('.hire').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('.our-team').offset().top
            
        }, 1000);
        
    });
    
    // Showing The Hidden Items From The "Our Work" Section When Clicking On The "Show More" Button
    
    $('.show-more').click(function () {
		
       $('.our-work .item').removeClass("hidden");
	   
	});
        
	// Hiding The Showed Items From The "Our Work" Section When Clicking On The "Show Less" Button
		
    $('.show-less').click(function () {
       
         $('#one, #two, #three').addClass("hidden");
	});
    
    // Cashing The Icons In Variables
    
    var leftArrow = $('.testim .fa-chevron-left'),
        
        rightArrow = $('.testim .fa-chevron-right');
    
    function checkClients() {
        
        if ($('.client:first').hasClass('active')) {
			
            // If We Are In The First DIV The "chevron-left" Icon Will Be Hidden
			
            leftArrow.fadeOut();
            
        } else {
			
            // If We Are Not In The First DIV The "chevron-left" Icon Will Be shown
			
            leftArrow.fadeIn();
        }
        
        if ($('.client:last').hasClass('active')) {
			
            // If We Are In The Last DIV The "chevron-right" Icon Will Be Hidden
			
            rightArrow.fadeOut();
            
        } else {
			
            // If We Are Not In The Last DIV The "chevron-right" Icon Will Be Shown
			
            rightArrow.fadeIn();
        }
                
    }
    
    checkClients();
    
    $('.testim i').click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testim .active').fadeOut(100, function () {
               
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkClients();
                
            });
            
        } else {
            
            $('.testim .active').fadeOut(100, function () {
               
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkClients();
                
            });
            
        }
        
    });

});