jQuery(function( $ ){
	/**
	 * Demo binding and preparation, no need to read this part
	 */
	//borrowed from jQuery easing plugin
	//http://gsgd.co.uk/sandbox/jquery.easing.php
	$.easing.elasout = function(x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	};
	// back links
	$('a.back').click(function(){
		$(this).parents('div.pane').scrollTo( 0, 800, { queue:true } );
		$(this).parents('div.section').find('span.message').text( this.title );
		return false;
	});
	//just for the example, to stop the click on the links.
	$('ul.links').click(function(e){
		e.preventDefault();
		var link = e.target;
		link.blur();
		if( link.title )
			$(this).parent().find('span.message').text(link.title);
	});
	
	// This one is important, many browsers don't reset scroll on refreshes
	// Reset all scrollable panes to (0,0)
	$('div.pane').scrollTo( 0 );
	// Reset the screen to (0,0)
	$.scrollTo( 0 );
	

	
	// Target examples bindings
	// THIS DEMO IS NOT INTENDED TO SHOW HOW TO CODE IT
	// JUST THE MULTIPLE OPTIONS. THIS CODE IS UGLY.
	var $paneTarget = $('#pane-target');

	$('.trigger01').click(function(){
		var $target = $paneTarget.find('.anchor01');
		$paneTarget.stop().scrollTo( $target , 800 );
	});
	$('.trigger02').click(function(){
		var $target = $paneTarget.find('.anchor02');
		$paneTarget.stop().scrollTo( $target , 800 );
	});
	$('.trigger03').click(function(){
		var $target = $paneTarget.find('.anchor03');
		$paneTarget.stop().scrollTo( $target , 800 );
	});
	$('.trigger04').click(function(){
		var $target = $paneTarget.find('.anchor04');
		$paneTarget.stop().scrollTo( $target , 800 );
	});
	$('.trigger05').click(function(){
		var $target = $paneTarget.find('.anchor05');
		$paneTarget.stop().scrollTo( $target , 800 );
	});
	$('.trigger06').click(function(){
		var $target = $paneTarget.find('.anchor06');
		$paneTarget.stop().scrollTo( $target , 800 );
	});
	$('.trigger07').click(function(){
		var $target = $paneTarget.find('.anchor07');
		$paneTarget.stop().scrollTo( $target , 800 );
	});
	$('.trigger08').click(function(){
		var $target = $paneTarget.find('.anchor08');
		$paneTarget.stop().scrollTo( $target , 800 );
	});
	$('.trigger09').click(function(){
		var $target = $paneTarget.find('.anchor09');
		$paneTarget.stop().scrollTo( $target , 800 );
	});

	

});