var TiHelper = {

	setOptions: function(field, item) {
		if (field.attr('type') == 'checkbox') {
			if(field.is(':checked')) {
				item.find('.newProps').append('<span class="' + field.attr('name') + '">' + field.attr('name') + ': ' + field.val() + ',<br /></span>');
			} else {
				item.find('.newProps .' + field.attr('name')).remove();
			}	
		}		
	}
		
};