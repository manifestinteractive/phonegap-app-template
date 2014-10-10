/**
 * Fires when an application is retrieved from the background.
 */
app.events.resume = function()
{
	app.stats.event('App', 'Event', 'Application Resumed');
};
