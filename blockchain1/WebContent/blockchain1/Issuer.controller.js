sap.ui.controller("blockchain1.Issuer", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf blockchain1.Issuer
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf blockchain1.Issuer
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf blockchain1.Issuer
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf blockchain1.Issuer
*/
//	onExit: function() {
//
//	}
	pressIssue:function(){
		app.to("idlogin5");
	},
	
	pressView:function(){
		app.to("ViewCertificate");
	},
	pressRevoke:function(){
		app.to("RevokeCertificate");
	},

	BackButtonPress:function(){
		app.to("idlogin1");
	}


});