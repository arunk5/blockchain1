sap.ui.controller("blockchain1.ViewCertificate", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf blockchain1.ViewCertificate
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf blockchain1.ViewCertificate
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf blockchain1.ViewCertificate
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf blockchain1.ViewCertificate
*/
//	onExit: function() {
//
//	}

	BackButtonPress:function(){
		app.to("idlogin4");
	},
	
	OnSearch:function(){
		
		 var FID = this.getView().byId("SimpleFormToolbar1");
		 var student_name = this.getView().byId("input-b9");
		 
		 var student_course = this.getView().byId("input-d1");
		 var student_specialization = this.getView().byId("input-e1");
		 var student_degree = this.getView().byId("input-f1");
		 var student_date = this.getView().byId("input-g1");
		 var student_status = this.getView().byId("input-sd1");
		 var revoke_date = this.getView().byId("input-rv1");
		 var exp_date = this.getView().byId("input-exp1");
		 var signedby = this.getView().byId("input-h1");
		 var grade = this.getView().byId("input-i1");
		 var internalnum = this.getView().byId("input-j1");
		 
		 var ID = this.getView().byId("input-b9");		 
		 
		 
		 var SearchFeild = this.getView().byId("input-c2");
		 var CID = this.getView().byId("input-c2").getValue();
		 var stumodel = new sap.ui.model.json.JSONModel();
		 console.log(CID);
		 var dialog = new sap.m.BusyDialog({ text:'Loading Data...', customIcon: 'blockchain.gif', customIconRotationSpeed: 0, customIconWidth: '112px' });
		 
		var URL= "http://ec2-18-221-124-132.us-east-2.compute.amazonaws.com:3000/api/org.stravis.certificate.Certificate/"+CID;
			
			//"http://ec2-13-58-237-3.us-east-2.compute.amazonaws.com:3000/api/org.stravis.certificate.Certificate/"+CID;
		 dialog.open();
		 $.ajax({
			
             type: "GET",

             url : URL,
            	 
             crossDomain: true,
           //  dataType: "jsonp",
            // jsonpCallback : "getJSON",
            // contentType : "application/json",
             
        /*     contentType:"application/json; charset=utf-8",
             headers:{
            	 
             "Access-Control-Allow-Origin": "*",
             "Access-Control-Allow-Credentials": "true"
            	 
             },*/
             success: function(data,textStatus,jqXHR) {
            	     console.log("Success");
             	    // console.log(data);
                      //data12 = data;
            	     
            	    stumodel.setData(data);
            	              
            	     stumodel.setData(data);
                     console.log(stumodel);
                    // SearchFeild.setEnabled("false");
                     FID.setModel(stumodel);
                     student_course.bindValue("/course");
                     student_name.bindValue("/name");
                     student_specialization.bindValue("/specialization");
                     student_degree.bindValue("/course");
                     student_date.bindValue("/issuedDate");
                     student_status.bindValue("/status");
                     revoke_date.bindValue("/revokeDate");
                     exp_date.bindValue("/expiryDate");
                     signedby.bindValue("/signedBy");
                     grade.bindValue("/grade");
                     internalnum.bindValue("/internalControlnumber");
                     //ID.bindValue("/0/studentId");
                     dialog.close();

             },
         error: function () {
        	 console.log("Failed");
        	 dialog.close();
			}
		});
         		
	}
});