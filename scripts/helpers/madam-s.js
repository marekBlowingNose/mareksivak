
/* analytics*/

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-20730989-3', 'auto');
  ga('send', 'pageview');

/* end of analytics*/




function contactMe(element) {
    
			console.log(element)		
			var form = 'form#' + element
			var formInput = $(form).serialize();
    
   
			/*$(element).submit(function(event) {
				alert("HI")
				
				var formInput = $(this).serialize();
				alert(formInput)*/
			$.ajax({
				method: 'POST',
				url: "scripts/mailer.php",
				data: formInput,
				
                success: function(data) {
                    $('#send-form').hide();
					$(form).slideUp("fast", function() {                  
						$(this).before('<div class="tick"><div class="symbol"><i class="fa fa-check-circle fa-2x"></i></div><h3 class="thank-you" >Thanks for your message!</h3></div>');
					});
				}
			});
			
				/*event.preventDefault();
			});*/
		};


$('.intro h1').css("opacity", "0"); 
$(".nav").css("left", "-250px").css("opacity", "0");
$(".intro .btn").css("bottom", "-50px").css("opacity", "0");
$(".work").css("opacity", "0");
$(".about").css("opacity", "0");

$(document).ready(function() {

	$('nav.fixed').midnight();
	
	
	$('textarea').autosize();  
	
	//$(".intro h1").hide().delay(200).fadeIn(400);
	
    
    
    
    
    $('.intro .deco').addClass('animated900 scaleInY');
    
    $('.intro .deco').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',  function()
   {
        $('.intro .deco').removeClass('animated900 scaleInY');
        
        //
   });
    
    
    setTimeout( function() {
       $('.intro h1').css("opacity", "1"); 
        $('.intro h1').addClass('animated900 moveInLeftShort');
   }, 800);
    
    

	//$(".nav").css("top", "-50px").css("opacity", "0").delay( 500 ).animate({top: "-15px"}, 300).animate({top: "20px", opacity: "1"}, 200);
	$(".nav").delay( 1500 ).animate({left: "0px"}, 300).animate({left: "20px", opacity: "1"}, 200);
	$(".intro .btn").delay( 2000 ).animate({bottom: "-15px"}, 300).animate({bottom: "0px", opacity: "1"}, 200);
	

    
    $('.work')
				.waypoint({
					triggerOnce: true,
					handler: function(direction)
					{
						if (direction == 'down')
						{
							var $this = $(this);
                            
                                $this.css("opacity", "1");
                                $('.dribbble-feed').find('.shot').each(function() {
                                    
                                    // generates random from 0 to 3
                                    var duration = Math.floor(Math.random() * 4)
                                    
                                    duration = 3 + duration*1;
                                    // fyi:  this = .shot
                                    $(this).addClass('animated' + duration + '00 zoomInShort');
                                    $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',  function()
                                   {
                                         $this.removeClass('animated' + duration + '00 zoomInShort');
                                   });
                                });
                                
                          /*
                            */
                            

						}
					},
					offset: '85%'
				});
    
    $('#contact-form')
				.waypoint({
					triggerOnce: true,
					handler: function(direction)
					{
						if (direction == 'down')
						{
							var $this = $(this);
                            
                                $this.css('opacity','1');
                                $this.addClass('animated1100 moveInLeftShort');
                          
                            $this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',  function()
                           {
                                 $this.removeClass('animated1100 moveInLeftShort');
                           });
                            

						}
					},
					offset: '85%'
				});
    
    $('.about, #direct-mail')
				.waypoint({
					triggerOnce: true,
					handler: function(direction)
					{
						if (direction == 'down')
						{
							var $this = $(this);
                            
                                $this.css('opacity','1');
                                $this.addClass('animated1100 moveInRightShort');
                          
                            $this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',  function()
                           {
                                 $this.removeClass('animated1100 moveInRightShort');
                           });
                            

						}
					},
					offset: '85%'
				});
    
    // smooth scroll to target element
   		
    
    
	smoothScroll.init({
				speed: 1000,
				easing: 'easeInOutCubic',
				offset: 0,
				updateURL: true,
				callbackBefore: function ( toggle, anchor ) {},
				callbackAfter: function ( toggle, anchor ) {}
	});
});


$(function() {
		  $('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
		    }
		  });
		});


$(document).scroll(function(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      });