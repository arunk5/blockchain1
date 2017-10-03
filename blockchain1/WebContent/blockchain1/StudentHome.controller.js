sap.ui.controller("blockchain1.StudentHome", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf blockchain1.StudentHome
*/
	onInit: function() {
		
		 myModel = new sap.ui.model.json.JSONModel();
		 console.log("Sucess");
		//// vbox = this.getView().byId("SelectId1");
         return;
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf blockchain1.StudentHome
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf blockchain1.StudentHome
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf blockchain1.StudentHome
*/
//	onExit: function() {
//
//	}
	
	BackButtonPress:function(){
		app.to("idlogin1");
	},
	
	onRejectPress1: function(){
		app.to("idlogin3");
	},
	onAcceptPress1: function(evt){
		
	
		var certID = evt.getSource().data("myData");
		
//		var date = this.getView().byId("nl1").getDescription();
//		//console.log(array.length);
//		
		sap.ui.controller("blockchain1.Certificate").hello(certID);
		app.to("idlogin3");

	},
	
    onAcceptPress2: function(){
		

    	var date1 = this.getView().byId("nl2").getDescription();
    	sap.ui.controller("blockchain1.Certificate").hello("C7");
    	
		app.to("idlogin3");

	},
	
	intialize:function(){
		
		
		// vbox = this.getView().byId("SelectId1");
		
	},
	
	
	
	
	
//	onInit: function() {
//
//	},
	_getDialog : function() {
         // create a fragment with dialog, and pass the selected data
         if (!this.dialog) {
             // This fragment can be instantiated from a controller as follows:
             this.dialog = sap.ui.xmlfragment("idFragment123","blockchain1.ShareFragment",this);
             //debugger;
         }	
         
         return this.dialog;
	 },
	 
	 closeDialogs : function(oEvent) {
		// console.log("Arun Here");
         this._getDialog().close()
     },
     onShare: function(oEvent) {
	//console.log("Arun Here");
	 this._getDialog().open();
},
  onSaves : function(oEvent) {

 	 
 	 
 	 var Visitor = sap.ui.getCore().byId("idFragment123--Visitor").getValue();
      var Phone = sap.ui.getCore().byId("idFragment123--phone").getValue();
      var ExpDate = sap.ui.getCore().byId("idFragment123--expdate").getValue();
 	
		 var finalData =
		 {
				 "$class": "org.stravis.certificate.ShareCertificate",
				 "sharelog": {
				   "$class": "org.stravis.certificate.ShareLog",
				   "shareId": "Sh123",
				   "visitoremail": Visitor,
				   "validTill": ExpDate,
				   "sharedBy": "Srikanth",
				   "certificateId": "C5"
				 }
		};
		 
		 
		 
		 
		 
	/*	 {
	        	  "$class": "org.stravis.certificate.ShareLog",
	        	  "shareId": "Sh12",
	        	   "visitoremail": Visitor,
	        	   "validTill": ExpDate,
	        	   "sharedBy": "Srikanth",
	        	   "certificate": "C5",
	        	};  */
	
  
var dialog = new sap.m.BusyDialog({ text:'Loading Data...', customIcon: 'blockchain.gif', customIconRotationSpeed: 0, customIconWidth: '112px' });
dialog.open();       
	
	 $.ajax({

   type: "POST",
   url : "http://ec2-18-221-124-132.us-east-2.compute.amazonaws.com:3000/api/org.stravis.certificate.ShareCertificate",
   data:finalData,
   success: function(data,textStatus,jqXHR) {
  	 console.log("Success cer share");
   	 dialog.close(); 
  	 jQuery.sap.require('sap.m.MessageBox');
	     sap.m.MessageBox.success("Certificate Has Been Shared Successfully");
   },
    error: function () {
 	console.log("Failed cert");
	 jQuery.sap.require('sap.m.MessageBox');
	 sap.m.MessageBox.error("Certificate Sharing Failed");
	 dialog.close();
	 console.log("Failed");
		}
	 });	
		
  
    	// this._getDialog().close()
     },
     
  fromLogin:function(oEvent)
  
      {
    
	  array = [];
	  var dialog = new sap.m.BusyDialog({ text:'Loading Data...', customIcon: 'blockchain.gif', customIconRotationSpeed: 0, customIconWidth: '112px' });
	  dialog.open();       
	  var i =0;
	  
	  
	  console.log("oEvent"+oEvent);
	  var SID = oEvent;
	  var stuviewmodel = new sap.ui.model.json.JSONModel(); 
	//  sap.ui.controller("blockchain1.StudentHome").intialize();
	  //this.onInit();
	  	 $.ajax({

	     type: "GET",
	     url : "http://ec2-18-221-124-132.us-east-2.compute.amazonaws.com:3000/api/queries/selectCertificateByStudent?student=resource%3Aorg.stravis.base.Student%23"+oEvent,
	    	 
	    	 //"http://ec2-18-221-124-132.us-east-2.compute.amazonaws.com:3000/api/org.stravis.certificate.Certificate/"+oEvent,
	    // table1.setModel(oModelll);
	     
	     crossDomain: true,
	         success: function(data,textStatus,jqXHR) {
	    	 console.log("Student Certificate View");
	    	 console.log(data);
	    	 stuviewmodel.setData(data);
	    	 console.log(stuviewmodel);
	    	 sap.ui.getCore().setModel(stuviewmodel,"custom");
	    	// console.log(this.getView());
	    	 var CIDS = stuviewmodel.getProperty("/");
	    	 console.log("certificate ids"+CIDS);
	    	 console.log("certificate ids length"+CIDS.length);
	    	 
//	    	 for(i =0;i<CIDS.length; i++)
//	   	 {
//	         var students= CIDS[i].student;
//	         console.log(students);
//	         var index = students.indexOf("#");
//	         var studentID=students.substring(index+1);
//	         if(studentID===SID)
//	        	 {
//	        	 certid=CIDS[i].certificateId;
//	        	 }
//
//	      }
	    	 
	    	 
	     	 dialog.close(); 
//	    	 jQuery.sap.require('sap.m.MessageBox');
//	  	     sap.m.MessageBox.success("Certificate Has Been Shared Successfully");
	     },
	      error: function () {
	     console.log("Student S1 Certificate View Failed");
	     jQuery.sap.require('sap.m.MessageBox');
  	     sap.m.MessageBox.error("Certificate Fetch Has Been Failed");
	  	 dialog.close();
	  	 
	  		}
	  	 });	
	  		
    	 
    	 
    	 
  }
     
     

});