sap.ui.controller("blockchain1.CreateVisitor", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf blockchain1.CreateVisitor
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf blockchain1.CreateVisitor
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf blockchain1.CreateVisitor
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf blockchain1.CreateVisitor
*/
//	onExit: function() {
//
//	}
	
	CreateVisitor: function() {
		

		
		var date2 = this.getView().byId("SelectId2").getValue();
		
		 var finalData ={  	    		  
	    		   
				 "$class": "org.stravis.base.Visitor",
				 "emailId": date2,
               
       };  
	
    
  var dialog = new sap.m.BusyDialog({ text:'Loading Data...', customIcon: 'blockchain.gif', customIconRotationSpeed: 0, customIconWidth: '112px' });
  dialog.open();       
	
	 $.ajax({

     type: "POST",
     url : "http://ec2-18-221-124-132.us-east-2.compute.amazonaws.com:3000/api/org.stravis.base.Visitor",
     data:finalData,
     success: function(data,textStatus,jqXHR) {
    	 console.log("Success");
     	 dialog.close(); 
    	 jQuery.sap.require('sap.m.MessageBox');
	     sap.m.MessageBox.success("Visitor has Been Added Successfully with Id :-"+date2);
     },
      error: function () {
 	
 	 jQuery.sap.require('sap.m.MessageBox');
	 sap.m.MessageBox.error("Visitor Addition Failed");
 	 dialog.close();
 	 console.log("Failed");
		}
	});	
		
		
	},
	
BackButtonPress:function(){
		
		app.to("AdminView");
		
	}

});