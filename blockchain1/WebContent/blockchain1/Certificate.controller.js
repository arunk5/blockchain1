sap.ui.controller("blockchain1.Certificate", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf blockchain1.Certificate
*/
	onInit: function() {
		
		
		  FID = this.getView().byId("SimpleFormToolbar1");
 		  student_name = this.getView().byId("input-b9");
 		 
 		  student_course = this.getView().byId("input-d1");
 		  student_specialization = this.getView().byId("input-e1");
 		  student_degree = this.getView().byId("input-f1");
 		  student_date = this.getView().byId("input-g1");
 		  student_status = this.getView().byId("input-sd1");
 		  revoke_date = this.getView().byId("input-rv1");
 		  exp_date = this.getView().byId("input-exp1");
 		  signedby = this.getView().byId("input-h1");
 		  grade = this.getView().byId("input-i1");
 		  internalnum = this.getView().byId("input-j1");
 		 
 		  ID = this.getView().byId("input-b9");		 
 		 
 		 
 		  SearchFeild = this.getView().byId("input-c2");
 		
	},
		_getDialog : function() {
	         // create a fragment with dialog, and pass the selected data
	         if (!this.dialog) {
	             // This fragment can be instantiated from a controller as follows:
	             this.dialog = sap.ui.xmlfragment("idFragment12","blockchain1.ShareFragment",this);
	             //debugger;
	         }	
	         
	         return this.dialog;
		 },
		 
		 closeDialogs : function() {
			 console.log("Inside Close");
	         this._getDialog().close()
	     },
	   onShare: function() {
		 this._getDialog().open();
	},
	onSave : function(oEvent) {},
	     
	     BackButtonPress:function() {
	    	 app.to("idlogin2");
	     },
	     
	     hello:function(oEvent){
	    	 console.log("HELLO"+oEvent);
	    	
//	 		var oModel1 = sap.ui.getCore().getModel("UAuth1");
//	 		var oModel2 = sap.ui.getCore().getModel("UAuth2");
//	 		//this.getView("idlogin2").getModel("STUMODEL");
//	 		console.log(oModel1);
//	 		console.log(oModel2);
//	 		 FID = this.getView().byId("SimpleFormToolbar1");
	 		 
	// 		 var name1,name2;
	 		 
//	 		 if(oModel1!= undefined)
//	 		 name1 = oModel1.getProperty("/");
//	 		 if(oModel2!= undefined)
//	 		 name2 = oModel2.getProperty("/");
//	 		 
	// 		 console.log(name1+" "+name2);
//	 		 
//	 		 if(name1!=null)
//	 		console.log("name1"+name1)
//	 		
//	 		if(name2!=null)
//	 		console.log("name2"+name2)
	 		
	 		 var CID = "C2";
	 			 //this.getView().byId("input-c2").getValue();
	 		 var stumodel = new sap.ui.model.json.JSONModel();
	 		 console.log(CID);
	 		
	 		var URL= "http://ec2-18-221-124-132.us-east-2.compute.amazonaws.com:3000/api/org.stravis.certificate.Certificate/"+oEvent;
	 		
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
	         			    	 
	     }
});


