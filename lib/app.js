// usage: log('inside coolFunc',this,arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};
 
// catch all document.write() calls
(function(doc){
  var write = doc.write;
  doc.write = function(q){
    log('document.write(): ',arguments);
    if (/docwriteregexwhitelist/.test(q)) write.apply(doc,arguments); 
  };
})(document);

// Main app setup / initialization
(function($){
	// Set the code window and app canvas right away
	var codeItems 	= $( '#codeItems' ),
		appCanvas	= $( '#appCanvas' ),
		appItems	= $( '#appItems' );
	
	// Make the sidebar links draggable
	$( "#sidebar a" ).draggable({
		revert: true	// Return sidebar element to original position
	});
	
	// Make the app canvas area the droppable area
	appCanvas.droppable({
		drop: function( event, ui ) { // Drop event listener
			// More jQuery-ish way to access the ID?  This seems fastest?
			TiElems.insert( ui.draggable[0].id, function(obj, code) {
				// Place UI in the device area and code template in the code window
				obj.appendTo( appItems );
				code.appendTo( codeItems );
			});
			
			// console.log(event);
			// console.log(ui);		
		}
	});
	
	// Handle highlighting the rows of data in the code and canvas areas
	$( '#appItems .item' ).live('mouseover mouseout', function(event) {
		// Get the current element index
		var index = $(this).index(),
			codeItem = codeItems.find('li').eq(index);
		
		// Mouseover / out conditional
		if (event.type == 'mouseover') { // addClass should be used instead so control is left up to CSS
			codeItem.css('backgroundColor', '#eee');
		  } else {
		  	codeItem.css('backgroundColor', '#fff');
		  }
	});
	
	// Handle adding config options to element's code block (temp hard coded test)
	$( '.elemConfig input' ).live('click', function() {
		var field = $(this),
			index = field.closest('li.item').index();  // parent LI container's index
			codeItem = codeItems.find('li').eq(index); // get the corresponding code snippet area
			
		TiHelper.setOptions(field, codeItem);		
	});
	
	
	// Reset layout and code window
	$('#resetApp').click(function() {
		codeItems.html('');
		appItems.html('');
	});

})(window.jQuery);
