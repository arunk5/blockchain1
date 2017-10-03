sap.ui.controller("blockchain1.VisitorCertificateView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf blockchain1.VisitorCertificateView
*/
	onInit: function() {
		
		/*  FID = this.getView().byId("SimpleFormToolbar11");
		  student_name = this.getView().byId("input-b91");
		 
		  student_course = this.getView().byId("input-d11");
		  student_specialization = this.getView().byId("input-e11");
		  student_degree = this.getView().byId("input-f11");
		  student_date = this.getView().byId("input-g11");
		  student_status = this.getView().byId("input-sd11");
		  revoke_date = this.getView().byId("input-rv11");
		  exp_date = this.getView().byId("input-exp11");
		  signedby = this.getView().byId("input-h11");
		  grade = this.getView().byId("input-i11");
		  internalnum = this.getView().byId("input-j11");
		 
		  ID = this.getView().byId("input-b91");		 
		 
		 
		  SearchFeild = this.getView().byId("input-c2");
		
	 		 var CID = "C8";
 			 //this.getView().byId("input-c2").getValue();
 		 var stumodel = new sap.ui.model.json.JSONModel();
 		 console.log(CID);
 		
 		var URL= "http://ec2-18-221-124-132.us-east-2.compute.amazonaws.com:3000/api/org.stravis.certificate.Certificate/"+CID;
 		
 		 $.ajax({

             type: "GET",

             url : URL,
            	 
             crossDomain: true,
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
                    // student_course.bindValue('{STUMODEL>/lastName}');
                     student_specialization.bindValue("/specialization");
                     student_degree.bindValue("/course");
                     student_date.bindValue("/revokeDate");
                     student_status.bindValue("/status");
                     revoke_date.bindValue("/revokeDate");
                     exp_date.bindValue("/expiryDate");
                     signedby.bindValue("/signedBy");
                     grade.bindValue("/grade");
                     internalnum.bindValue("/internalControlnumber");
                     //ID.bindValue("/0/studentId");

             },
         error: function () {
        	 console.log("Failed");
 			}
 		});
         	
		*/
		

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf blockchain1.VisitorCertificateView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf blockchain1.VisitorCertificateView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf blockchain1.VisitorCertificateView
*/
//	onExit: function() {
//
//	}

});