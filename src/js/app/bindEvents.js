app.bindEvents = function()
{
	// The event fires when Cordova is fully loaded.
	if(typeof device !== 'undefined')
	{
		// Initial event fired when device is ready and app is launched
		document.addEventListener('deviceready', app.events.deviceReady, false);

		// The event fires when an application is put into the background.
		document.addEventListener('pause', app.events.pause, false);

		// The event fires when an application is retrieved from the background.
		document.addEventListener('resume', app.events.resume, false);

		// The event fires when the device goes offline
		document.addEventListener('online', app.events.networkOnline, false);

		// The event fires when the device comes back online
		document.addEventListener('offline', app.events.networkOffline, false);
	}
	// this is not a device, and deviceready will never fire, so lets fake it
	else
	{
		app.events.deviceReady();
	}

};
