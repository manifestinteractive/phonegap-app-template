/**
 * Fires when an application is put into the background
 */
app.events.pause = function()
{
	app.stats.event('App', 'Event', 'Application Paused');
};
