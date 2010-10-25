var TiElems = {

	insert: function(elem, func) {
		switch(elem) {
			case 'tableView':
				this.tableView(func);
				break;
			
			default:
				alert('something else dropped');
				break;
		}
	},
	
	tableView: function(func) {	
		// The specific UI markup to use
		var markup = $( "#tableTmpl" ).html();
		
		// Set default data / properties for the tableView and code template
		var objTmpl = [
	        { 
				type: 'tableView',
				apiLink: 'http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView-object',
				markup: markup
			}
	    ];

	    var codeTmpl = [
	        { height: 108, layout: 'vertical' }
	    ];

		var obj 	= $( "#uiElem" ).tmpl( objTmpl );
		var code 	= $( "#tableViewCode" ).tmpl( codeTmpl );

		if(func) { func(obj, code); } // callback	
	}
		
};