/**
 * Generates GUID ( useful for if we are testing outside device without GUID )
 */
app.util.generateGUID = (function()
{
	function s4()
	{
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1).toUpperCase();
	}

	return function()
	{
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	};
})();