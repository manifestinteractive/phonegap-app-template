/**
 *
 */
app.events.networkOffline = function()
{
	app.stats.event('App', 'Event', 'Device Offline');

	app.notification.alert(
		app.locale.dict('notification', 'offline_message'),
		function(){},
		app.locale.dict('notification', 'offline_title'),
		app.locale.dict('button', 'ok')
	);

	app.online = false;
};
