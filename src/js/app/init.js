app.initialize = function()
{
	this.bindEvents();

	gui.resize();

	app.locale.init();
	app.stats.init();
	app.store.init();
};
