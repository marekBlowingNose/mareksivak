'use strict';

var app = angular.module('dbDeveloperStudioApp', [
    'ngAnimate',
    'ngSanitize',
    'ngTouch',
	'ngRoute',
	'ngAnimate'
  ]);
    
app.config(function($routeProvider) 
{
		$routeProvider		
		.when('/', {
			templateUrl : 'views/landing.html',
			controller  : 'LandingCtrl'
		})
		.when('/about', {
			templateUrl : 'views/about.html',
			controller  : 'AboutCtrl'
		})
		.when('/contact', {
			templateUrl : 'views/contact.html',
			controller  : 'ContactCtrl'
		})
		.when('/download', {
			templateUrl : 'views/download.html',
			controller  : 'DownloadCtrl'
		})

			.when('/features/explorer', {
				templateUrl : 'views/features/explorer.html',
				// controller  : 'FeaturesCtrl'
			})	
			.when('/features/gps', {
				templateUrl : 'views/features/gps.html',
				// controller  : 'FeaturesCtrl'
			})		
			.when('/features/projects', {
				templateUrl : 'views/features/projects.html',
				// controller  : 'FeaturesCtrl'
			})		
			.when('/features/filters', {
				templateUrl : 'views/features/filters.html',
				// controller  : 'FeaturesCtrl'
			})	
			.when('/features/designer', {
				templateUrl : 'views/features/designer.html',
				// controller  : 'FeaturesCtrl'
			})		
			.when('/features/widgets', {
				templateUrl : 'views/features/widgets.html',
				// controller  : 'FeaturesCtrl'
			})	
			.when('/features/jobs', {
				templateUrl : 'views/features/jobs.html',
				// controller  : 'FeaturesCtrl'
			})		
		
		.when('/screenshots', {
			templateUrl : 'views/screenshots.html',
		})		
		
		.when('/comparison', {
			templateUrl : 'views/comparison.html',
			controller  : 'ComparisonCtrl'
		})		
		.when('/buy', {
			templateUrl : 'views/buy.html',			
		})		
		
		
		;
});  


app.post('/api/contact', function(req, res, next) {
  if (req.param('honey')) {
    return res.send(500)
  }

  console.log('>> creating email')

  var name = req.param('name'),
      email = req.param('email'),
      message = req.param('message');

  console.log('>> ' + name);
  console.log('>> ' + email);
  console.log('>> ' + message);

  transporter = nodemailer.createTransport()

  var email = {
    from: email,
    to: ['mmareq@gmail.com'],
    subject: '[mareksivak.me] ' + name + ' sent me message',
    text: message
  };

  console.log('>>')
  console.log(email)

  res.send(200)
alert('aa' + email);
  transporter.sendMail(email, function(err, response) {
    console.log(response)
    console.log('Email sent successfully!')
  })
})

app.run(function($rootScope) 
{ 
	$rootScope.$on('$routeChangeStart', function(evt, next, current) 
	{
		if ( next.$$route.templateUrl && next.$$route.templateUrl.indexOf("landing") > -1 )
		{
			$('.navbar').removeClass('past-main');
		}
		else
		{
			$('.navbar').addClass('past-main');
		}		
	});
});


