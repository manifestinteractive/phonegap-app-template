app.tour = {
	gui_reset: true,
	start: function()
	{
		app.giving_tour = true;

		$('#tourbus').tourbus({
			debug: false,
			autoDepart: true,
			onLegStart: function(leg, bus)
			{
				$('.toubus-next').click(function(event)
				{
					event.stopPropagation();
					event.preventDefault();
				});

				if(leg.rawData.autoProgress)
				{
					var currentIndex = leg.index;
					setTimeout(
						function()
						{
							if(bus.currentLegIndex != currentIndex)
							{ return; }
							bus.next();
						},
						leg.rawData.autoProgress
					);
				}

				// highlight where required
				if(leg.rawData.highlight)
				{
					leg.$target.addClass('intro-tour-highlight');
					$('.intro-tour-overlay').show();
				}

				// Start Tour
				if(leg.index == 1)
				{
					// @TODO: We can check each step of the tour and do something
				}
			},
			onLegEnd: function(leg)
			{
				// remove highlight when leaving this leg
				if(leg.rawData.highlight)
				{
					leg.$target.removeClass('intro-tour-highlight');
					$('.intro-tour-overlay').hide();
				}
			},
			onDepart: function()
			{
				$('.tourbus-container').fadeIn('slow');
			},
			onStop: function()
			{
				app.tour.stop();
			}
		});
	},
	stop: function()
	{
		$('.tourbus-container').hide().remove();
		$('.intro-tour-highlight').removeClass('intro-tour-highlight');
		$('.intro-tour-overlay').hide();

		if(!app.tour.gui_reset && !app.sharing_data)
		{
			gui.reset();
			app.tour.gui_reset = true;
		}

		// @TODO: Check if we had something launched from the protocol

		app.giving_tour = false;
	}
};
