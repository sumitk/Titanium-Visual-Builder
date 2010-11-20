var TiElems = {

	insert: function(elem, func) {
		switch(elem) {
			case 'tableView':
				this.tableView(func);
				break;
				
			case 'label':
				this.label(func);
				break;
				
			case 'textfield':
				this.textfield(func);
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
	},
	
	textfield: function(func) {	
		// The specific UI markup to use
		var markup = $( "#textfieldTmpl" ).html();
		
		// Set default data / properties for the tableView and code template
		var objTmpl = [
	        { 
				type: 'textfield',
				apiLink: 'http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TextField-object',
				markup: markup
			}
	    ];

	    var codeTmpl = [
	        { value: 'Text Value Here' }
	    ];

		var obj 	= $( "#uiElem" ).tmpl( objTmpl );
		var code 	= $( "#textfieldCode" ).tmpl( codeTmpl );

		if(func) { func(obj, code); } // callback	
	},

	label: function(func) {	
		// The specific UI markup to use
		var markup = $( "#labelTmpl" ).html();
		
		// Set default data / properties for the tableView and code template
		var objTmpl = [
	        { 
				type: 'label',
				apiLink: 'http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Label-object',
				markup: markup
			}
	    ];

	    var codeTmpl = [
	        { text: 'Label Text Here' }
	    ];

		var obj 	= $( "#uiElem" ).tmpl( objTmpl );
		var code 	= $( "#labelCode" ).tmpl( codeTmpl );

		if(func) { func(obj, code); } // callback	
	}	
		
};