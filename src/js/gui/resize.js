gui.resize = function()
{
	gui.screen = {
		width: (app.platform === 'desktop') ? window.innerWidth : screen.width,
		height: (app.platform === 'desktop') ? window.innerHeight : screen.height
	};

	// Reset Container Elements
	$('.container, .content, .panel').css({
		width: gui.screen.width,
		height: gui.screen.height
	});

	// @TODO: Get some initial measurements

	// @TODO: Move UI Elements that need it
	// $('.logo').css('top', gui.screen.height * 0.115);
};
