


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



$(document).ready(function() {

	$('nav.fixed').midnight();
	
	
	$('textarea').autosize();  
	
	$(".intro h1").hide().delay(200).fadeIn(400);
	//$(".nav").css("top", "-50px").css("opacity", "0").delay( 500 ).animate({top: "-15px"}, 300).animate({top: "20px", opacity: "1"}, 200);
	$(".nav").css("left", "-250px").css("opacity", "0").delay( 500 ).animate({left: "0px"}, 300).animate({left: "20px", opacity: "1"}, 200);
	$(".intro .btn").css("bottom", "-50px").css("opacity", "0").delay( 1000 ).animate({bottom: "-15px"}, 300).animate({bottom: "0px", opacity: "1"}, 200);
	
	
	smoothScroll.init({
				speed: 1000,
				easing: 'easeInOutCubic',
				offset: 0,
				updateURL: true,
				callbackBefore: function ( toggle, anchor ) {},
				callbackAfter: function ( toggle, anchor ) {}
	});
});


$(document).scroll(function(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      });