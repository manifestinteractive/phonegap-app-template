/**
 *
 * @returns {boolean}
 */
app.events.deviceReady = function()
{
    app.stats.event('App', 'Event', 'Device Ready');

	setTimeout(function(){

		if(typeof navigator.splashscreen !== 'undefined')
		{
			navigator.splashscreen.hide();
		}

		if(app.initialized === true)
		{
			return false;
		}

		app.initialized = true;

		if(app.uuid === null && typeof device !== 'undefined')
		{
			app.uuid = device.uuid;
		}
		else if(app.uuid === null)
		{
			app.uuid = app.util.generateGUID();
		}

		gui.initialize();

	}, 1000);
};
