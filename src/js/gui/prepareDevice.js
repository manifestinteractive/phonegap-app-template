gui.prepareDevice = function()
{
	app.util.debug('log', 'Preparing Device');

	if(typeof StatusBar !== 'undefined')
	{
		app.util.debug('log', 'Hiding Status Bar');
		StatusBar.hide();
	}

	var platform = (typeof device !== 'undefined' && typeof device.platform !== 'undefined') ?
		device.platform :
		'desktop';

	$('html').addClass(platform.toLowerCase());

	// Force Width & Height on Elements that need it
	gui.resize();

	$(window).resize(function()
	{
		gui.resize();
	});

	var dev_button = null;

	$('.devonly').addClass('toggle-dev');

	if(config.app.env === 'dev')
	{
		$('.content').append('<div class="dev" id="dev-btn"><\/div>');
		dev_button = $('#dev-btn');
		$('.toggle-dev').toggleClass('devonly');
	}
	else
	{
		$('.content').append('<div class="dev-enable" id="dev-btn-enable"><\/div>');
		dev_button = $('#dev-btn-enable');
	}

	dev_button.hammer().bind('press', function() {
		$('.toggle-dev').toggleClass('devonly');
	});
};
