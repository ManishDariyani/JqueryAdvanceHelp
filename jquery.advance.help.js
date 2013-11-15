/**
 * jQuery.advanceHelp 
 * Date: Nov 13, 2013
 * @author Manish Dariyani
 * @version 1.0
 *
*/
// Making a local '$' alias of jQuery to support jQuery.noConflict
(function($) {
	jQuery.fn.advanceHelp = function (options) {
		var me = this,
		elementCurrent = $(this),
		default_options = {
			helpText: 'This is help text!',
			buttonText: 'Close',
			model: true,
			helpBgColor: '#075698',
			helpBoxPosition: 'auto',
			helpTextColor: '#FFF',
			helpTextSize: 'small',
			elementBgColor: '#FFF'
		},
		findReleventPosition = function(selector,box){
			position = 'right';
			if(selector.offset().top > box.height() + 40)
				position = 'top';
			else if(selector.offset().left > box.width() + 40)
				position = 'left';
			else if(selector.offset().top + box.height() + selector.height() + 40 < $(window).height())
				position = 'bottom';
			return(position);
		},
		closeBox = function(){
			if($('#advanceHelpOverlay').length > 0) {
				$('#advanceHelpOverlay').fadeOut(300,function(){
					destroy();
				});
			}
			else{
				destroy();
			}
		},
		destroy = function(){
			$('#advanceHelpText,#advanceHelpDummyDiv,#advanceHelpOverlay').remove();
			$('.helpSection').removeClass('helpSection').css({'background-color':'transparent'});
			if(options.onHide)
				options.onHide.call();
		}
		options = $.extend(default_options, options);
		
		if($('#advanceHelpOverlay').length > 0) {
			destroy();
			if(options.onOverride)
				options.onOverride.call();
		}
			
		var bubbleBox = '<div id="advanceHelpText" style="display:none;background-color:'+options.helpBgColor+';color:'+options.helpTextColor+';font-size:'+options.helpTextSize+';top:'+boxTop+'px;left:'+boxLeft+'px;">'+options.helpText+'<div id="advanceHelpDummyDiv" style="display:none;border-color:'+options.helpBgColor+';"></div></div>';
		$('body').append(bubbleBox);
		var box = $('#advanceHelpText');
		var position = (options.helpBoxPosition && options.helpBoxPosition != 'auto')?options.helpBoxPosition:findReleventPosition(elementCurrent,box);
		var boxLeft = (position == 'top' || position == 'bottom')?elementCurrent.offset().left:(position == 'right')?elementCurrent.offset().left + elementCurrent.width() + 50:elementCurrent.offset().left - box.width() - 60;
		var boxTop = (position == 'left' || position == 'right')?elementCurrent.offset().top:(position == 'bottom')?elementCurrent.offset().top + elementCurrent.height() + 50:elementCurrent.offset().top - box.height() - 40;
		
		box.css({'top':boxTop+'px','left':boxLeft+'px'}).show().children().addClass(position+'Box').show();
		
		
		if(options.model){
			var modelOverlay = '<div id="advanceHelpOverlay"></div>';
			$('#advanceHelpText').wrap(modelOverlay);
		}
		
		elementCurrent.addClass('helpSection').css({'background-color':options.elementBgColor});
		
		$('#advanceHelpOverlay').fadeIn(300,function(){
			if(options.onShow)
					options.onShow.call();
		});
		var closeElems = (options.model)?$('#advanceHelpOverlay,#advanceHelpClose'):$('#advanceHelpClose');
		closeElems.bind('click',closeBox);
	}
})(jQuery);

