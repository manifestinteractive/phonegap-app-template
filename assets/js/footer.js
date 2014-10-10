// Initialize App
(function(){
	app.initialize();
}());

// Handler for Custom protocol://
function handleOpenURL(url)
{
	// This will set an internal flag to launch during app.initialize
	var launch_protocol = url.replace(config.app.protocol, '');

	// Check if the app is already initialized ( use might have app running in background before tapping invite link )
	if(app.initialized && launch_protocol !== '')
	{
		// Do Something with Custom Protocol
	}
}