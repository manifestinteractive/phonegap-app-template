gui.handle.navigation = function()
{

	app.util.debug('log', 'Setting up Navigation');

	var items = $('.slide');
	var content = $('.content');

	$('button.support-site').hammer(gui.touchOptions).bind(gui.touchEvents, function(event)
	{
		event.stopPropagation();
		event.preventDefault();

		app.stats.event('Navigation', 'Button', 'Support Site Opened');

		window.open(config.app.support.website, '_system');

		$(this).blur();

		return false;
	});

	$('button.terms-of-use').hammer(gui.touchOptions).bind(gui.touchEvents, function(event)
	{
		event.stopPropagation();
		event.preventDefault();

		app.stats.event('Navigation', 'Button', 'Terms of Use Opened');

		window.open(config.app.support.terms_of_use, '_system');

		$(this).blur();

		return false;
	});

	$('button.privacy-policy').hammer(gui.touchOptions).bind(gui.touchEvents, function(event)
	{
		event.stopPropagation();
		event.preventDefault();

		app.stats.event('Navigation', 'Button', 'Privacy Policy Opened');

		window.open(config.app.support.privacy_policy, '_system');

		$(this).blur();

		return false;
	});

	$('button.visit-website').hammer(gui.touchOptions).bind(gui.touchEvents, function(event)
	{
		event.stopPropagation();
		event.preventDefault();

		app.stats.event('Navigation', 'Button', 'Website Visited');

		window.open(config.app.support.info, '_system');

		$(this).blur();

		return false;
	});

	$('#navToggle').hammer(gui.touchOptions).bind(gui.touchEvents, function(event)
	{
		event.stopPropagation();
		event.preventDefault();

		app.tour.stop();

		if(content.hasClass('open'))
		{
			$(items).removeClass('open').addClass('close');
			app.stats.event('Navigation', 'Menu', 'Close');
		}
		else
		{
			$(items).removeClass('close').addClass('open');
			app.stats.event('Navigation', 'Menu', 'Open');
		}

		return false;
	});

	content.hammer(gui.touchOptions).bind(gui.touchEvents, function()
	{
		if(content.hasClass('open'))
		{
			$(items).removeClass('open').addClass('close');
			app.stats.event('Navigation', 'Menu', 'Closed by Page Tap');
		}
	});

	$('nav a').hammer(gui.touchOptions).bind(gui.touchEvents, function(event)
	{
		event.stopPropagation();
		event.preventDefault();

		var panel = $(this).data('panel');
		var id = $(this).attr('id');
		var label = $(this).html();

		// Do nothing if user clicks tab for current panel
		if(id === 'trigger-tour')
		{
			app.tour.stop();

			setTimeout(function()
			{
				app.tour.start();
			}, 500);

			$('nav a').removeClass('active');
			$('.panel').removeClass('active');

			$('#home').addClass('active');

			$('#navToggle').trigger('press');
			return false;
		}

		// Do nothing if user clicks tab for current panel
		if(panel === gui.currentPanel)
		{
			$('#navToggle').trigger('press');
			return false;
		}

		app.stats.event('Navigation', 'Page Change', panel);

		$('nav a').removeClass('active');
		$('.panel').removeClass('active');

		gui.currentPanel = panel;

		$(this).addClass('active');
		$('#' + panel).addClass('active');

		$('header .label').html(label);

		$('#navToggle').trigger('press');

		if(panel === 'home')
		{
			$('.dev').show();
		}
		else
		{
			$('.dev').hide();
		}

		return false;
	});

	$('a.clear-log').hammer(gui.touchOptions).bind(gui.touchEvents, function()
	{
		$('#dev-log .output ul').html('');
		return false;
	});
};
