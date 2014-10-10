/* Copy and Rename file to config.js */

var config = {

	/* General Application Settings */
	app:
	{
		/* Name of Application */
		title: 'MyApp',

		/* Development Environment [ dev | prod ] */
		env: 'dev',

		/* Protocol Used for App ( myapp:// ) */
		protocol: 'myapp://',

		/* App Support Information */
		support: {
			website: 'http://support.mywebsite.com',
			email: 'support@fmywebsite.com',
			info: 'https://mywebsite.com',
			terms_of_use: 'https://mywebsite.com/terms-of-use',
			privacy_policy: 'https://mywebsite.com/privacy-policy'
		},

		/* Settings for Development */
		dev: {

			/* URL for API Calls */
			api_url: 'https://dev.mywebsite.com'
		},
		/* Settings for Production ( same descriptions as above ) */
		prod: {
			api_url: 'https://api.mywebsite.com'
		}
	},

	/* Google Settings */
	google: {

		/* Analytics Code for Mobile App */
		analytics: 'UA-XXXXXXXX-X'
	}
};