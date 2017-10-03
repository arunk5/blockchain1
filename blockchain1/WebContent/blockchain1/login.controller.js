sap.ui.controller("blockchain1.login", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf blockchain1.login
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf blockchain1.login
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf blockchain1.login
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf blockchain1.login
*/
//	onExit: function() {
//
//	}
	onLogin: function(){
						
		var table1 = this.getView().byId("input-a").getValue();
		console.log(table1);
		
		if(table1==="issuer")
		{
			
			app.to("idlogin4");
		
		}
		
		else if(table1=="viewer")
		{
			
			app.to("VisitorCertView");			
			
		}
		
		
		else if(table1=="admin")
		{
		
		app.to("AdminView");
		
		}
		
		
		else if(true)
		{			
			sap.ui.controller("blockchain1.StudentHome").fromLogin(table1);
			app.to("idlogin2");
		} 
		
		else
		{

	    jQuery.sap.require('sap.m.MessageBox');
	    sap.m.MessageBox.error("No Such Role Defined");
			
		}
		
	}

});