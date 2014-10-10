/**
 *
 */
app.events.networkOnline = function()
{
	app.stats.event('App', 'Event', 'Device Online');
	app.online = true;
};
