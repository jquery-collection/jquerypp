steal('jquery', 'can/control', 'jquery/class','can/control/plugin',function($, Control) {
	$.Controller = Control;
	$.fn.controller = $.fn.control;
	$.fn.controllers = $.fn.controllers;
});
