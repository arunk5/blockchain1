sap.ui.controller("blockchain1.IssueCertSing", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf blockchain1.IssueCertSing
*/
	onInit: function() {
		
		var data = {
			      myDate : new Date()
			    };
			    
			    var oModel = new sap.ui.model.json.JSONModel();
				oModel.setData(data);
				sap.ui.getCore().setModel(oModel);
				
				
				
				

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf blockchain1.IssueCertSing
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf blockchain1.IssueCertSing
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf blockchain1.IssueCertSing
*/
//	onExit: function() {
//
//	}
	
	BackButtonPress:function(){
		//app.to("IssueCertMult");
		app.to("ViewCert2");
	},
	
	
	 formatDate:function(date) {
	  var monthNames = [
	    "January", "February", "March",
	    "April", "May", "June", "July",
	    "August", "September", "October",
	    "November", "December"
	  ];

	  var day = date.getDate();
	  var monthIndex = date.getMonth();
	  var year = date.getFullYear();

	  return day + ' ' + monthIndex+ ' ' + year;
	},

	
	OnSubmit:function(){
		//app.to("IssueCertMult");
		//alert("View");
		
		var certmodel = new sap.ui.model.json.JSONModel();
        var SFId = this.getView().byId("SimpleFormToolbar");
		//console.log("SFId"+SFId);
		
		var InB = this.getView().byId("input-b");
		var Course = this.getView().byId("input-d");
		var Special = this.getView().byId("input-e");
		var Degree = this.getView().byId("input-f");
		
		var CGPA = this.getView().byId("input-i");
		var Status = this.getView().byId("input-st");
		
		var RevokeDate = this.getView().byId("input-rv");
		var ExpiryDate = this.getView().byId("input-exp");
						
		
		var SignedBy = this.getView().byId("input-h");
		var InternalNo = this.getView().byId("input-j");
		
		var daate = this.getView().byId("input-g");
		
		
		
		var dialog = new sap.m.BusyDialog({ text:'Loading Data...', customIcon: 'blockchain.gif', customIconRotationSpeed: 0, customIconWidth: '112px' });
		dialog.open();
		var oModel = new sap.ui.model.odata.ODataModel("proxy/http/10.2.1.124:8001/sap/opu/odata/SAP/ZSTUD_GRADE_CARD_SRV/");
		//console.log(oModel);
		
		var studentno = this.getView().byId("input-c").getValue();
		//console.log(studentno);
		//StudentDetailsSet?$filter=IStudent eq '0500007789' and IProgStudy eq '50009335' and IAcYear eq '2012' and IAcSem eq '87-88' '0500037708'
		var URL = "/StudentDetailsSet?$filter=IStudent eq '"+studentno+"'and IProgStudy eq '50007272' and IAcYear eq '2014' and IAcSem eq '81'";
		//console.log(URL);
		oModel.read(URL,{
		 		//"/StudentDetailsSet?$filter=IStudent eq"+studentno+"and IProgStudy eq '50007272' and IAcYear eq '2014' and IAcSem eq '81'", {
		 method : "GET",
			success : function(data) {
				
				console.log(data);
				certmodel.setData(data);
				SFId.setModel(certmodel);
				console.log(certmodel);
				//if(certmodel.length>0)
				{
			    name = certmodel.getProperty("/results/0/Name");
				
				InB.bindValue("/results/0/Name");
				//InB.setModel(certmodel);
				console.log(certmodel);
				var program = certmodel.getProperty("/results/0/Program");
				var index = program.indexOf("(");
				var lastindex = program.indexOf(")");
				
			    course = program.substring(0, index);
			    spcieal = program.substring(index+1,lastindex);
				Degree.setValue(course);
				Course.setValue(course);
				Special.setValue(spcieal);
				
			    cgpaa = certmodel.getProperty("/results/0/Cgpa");
				
				CGPA.bindValue("/results/0/Cgpa");	
				
				
				
				stat = certmodel.getProperty("/results/0/Status");
				var colonindex = stat.indexOf(":");
			    stat = stat.substring(colonindex+1);
				Status.setValue(stat);
				//sap.ui.getCore().setModel(certmodel,"CERTS");
				SignedBy.setValue("Vice-Chancellor")
				RevokeDate.setValue("31-12-9999");
				ExpiryDate.setValue("31-12-9999");
				//alert(JSON.stringify(data));
				
			    studentNo = certmodel.getProperty("/results/0/Student12");
				var session = certmodel.getProperty("/results/0/Session");
			    Internal = studentNo+":"+session;
//				//console.log(studentNo+" "+session);
				InternalNo.setValue(Internal);
				daate.setDateValue( new Date());
				
				dialog.close();
				}
//				else
//					dialog.close();
			},
			error : function() {
                console.log("error");
                dialog.close();
			}
		});
		
	},
	
	
	
	
	
	
	
	IssueCertificate:function(){
		
		
		 var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
		 var certID="C"+randomNumberBetween0and19;
		 var date =  new Date();
		 date = date.toLocaleDateString("en-US");
		 console.log(certID+" "+course+" "+spcieal+" "+course+" "+date);
//		 var status="";
//		 if(stat==='PASS')
//			 status="OPEN" 
//			 else
//				 status="EXPIRED"
					 
	     var finalData ={  	    		  
	    		   
	    			    "$class": "org.stravis.university.IssueCertificate",
	    			    "certificate": {
	    			     "$class": "org.stravis.certificate.Certificate",
	    			     "certificateId": certID,
	    			     "name": name,
	    			     "course": course,
	    			     "specialization":spcieal,
	    			     "degree":course,
	    			     "issuedDate": date,
	    			     "signedBy": "Vice Chancellor",
	    			     "grade": stat+" : "+cgpaa,
	    			     "internalControlnumber": Internal,
	    			     "status": "OPEN",
	    			     "revokeDate": "31-12-9999",
	    			     "expiryDate": "31-12-9999",
	    			     "student": studentNo,
	    			     "issuinguniversity": "UPES"	    			     
	    			   }
	    			  
	                  
	                  
	          };  
		
	       
	     var dialog = new sap.m.BusyDialog({ text:'Loading Data...', customIcon: 'blockchain.gif', customIconRotationSpeed: 0, customIconWidth: '112px' });
	     dialog.open();       
		
		 $.ajax({

            type: "POST",

            //url : "http://ec2-13-58-237-3.us-east-2.compute.amazonaws.com:3000/api/org.stravis.university.IssueCertificate",
           url : "http://ec2-18-221-124-132.us-east-2.compute.amazonaws.com:3000/api/org.stravis.university.IssueCertificate",
           	//"http://my-e-school.com/school.php?table_name=school_course",
           // crossDomain: true,
            data:finalData,
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
           	  dialog.close(); 
           	 jQuery.sap.require('sap.m.MessageBox');
      	     sap.m.MessageBox.success("Certificate has Been Issued Successfully with Id :-"+certID);
           	     
           	  /*    stumodel.setData(data);
           	   
    				
                                              
           	        stumodel.setData(data);
                    console.log(stumodel);
                    FID.setModel(stumodel);
                    ID.bindValue("/0/studentId"); */
      	   

            },
        error: function () {
        	
        	 jQuery.sap.require('sap.m.MessageBox');
      	     sap.m.MessageBox.error("Certificate Issue Has Been Failed");
        	
      	   dialog.close();
        	
       	 console.log("Failed");
			}
		});
		
		
		
		
	},
	
	

		

});