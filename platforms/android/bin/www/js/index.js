$(document).ready(function(){
	document.addEventListener('deviceready', onDeviceReady, false);
});
	
	
function onDeviceReady(){
	
	
	// Check user settings
	if(localStorage.fullname == null || localStorage.fullname == ''
	   && localStorage.businessname == null || localStorage.businessname == ''
	   && localStorage.email == null || localStorage.email == ''
	   && localStorage.domainname == null || localStorage.domainname == ''){
		console.log("Nope");
		$('#settingsEmpty').popup();
		$("#settingsEmpty").popup("open");
	} else {
		$('#settingsEmpty').hide();
		var fullname = localStorage.getItem('fullname');
		var businessname = localStorage.getItem('businessname');
		var email = localStorage.getItem('email');
		var domainname = localStorage.getItem('domainname');
		console.log(fullname);
		$("#form-settings-fullname").val(fullname);
		$("#form-settings-businessname").val(businessname);
		$("#form-settings-email").val(email);
		$("#form-settings-domainname").val(domainname);
	}
	
	
	// Setup Configuration
	$("#settingsEmptySave").click(function(){
		var fullname = $("#popup-settings-fullname").val();
		var businessname = $("#popup-settings-businessname").val();
		var email = $("#popup-settings-email").val();
		var domainname = $("#popup-settings-domainname").val();
		
		if (fullname && businessname && email && domainname) { 
			//validate email
			if (IsEmail(email)==false) {
			     $("#popup-settings-email").css({"background":"#FF9494"});
				 $(".emailError").fadeIn(200);	
			}else{
				updateSettings(fullname,businessname,email,domainname);
				$(".emailError").hide();
				$("#popup-settings-email").css({"background":"#FFFFFF"});
				$("#settingsEmpty").popup("close");
			}
	    }
	});
	
	
	
	
	// Setup Configuration
	$("#settingsSave").click(function(){
		var fullname = $("#form-settings-fullname").val();
		var businessname = $("#form-settings-businessname").val();
		var email = $("#form-settings-email").val();
		var domainname = $("#form-settings-domainname").val();
		
		if (fullname && businessname && email && domainname) { 
			//validate email
			if (IsEmail(email)==false) {
			     $("#form-settings-email").css({"background":"#FF9494"});
				 $(".emailError").fadeIn(200);	
			}else{
				updateSettings(fullname,businessname,email,domainname);
				$(".emailError").hide();
				$("#form-settings-email").css({"background":"#FFFFFF"});
			}
	    }
	});

	
	
	
	// Send Testimonial
	$("#sendTestimonial").click(function(){
		console.log("Send Clicked");
		var testimonial = $("#form-testimonial-testimonial").val();
	    var clientname = $("#form-testimonial-clientname").val();
	    var date = $("#form-testimonial-date").val();
		
		   sendEmail(testimonial,clientname,date);
		
		$("#form-testimonial-testimonial").val("");
	    $("#form-testimonial-clientname").val("");
	    $("#form-testimonial-date").val("");
	});
	
	
	
	
	
	
/*$("#btn-from-gallery").click(function(){
	console.log("Get Photo Start");
navigator.camera.getPicture(onSuccess, onFail, { 
				quality:50,
				destinationType:Camera.DestinationType.DATA_URL,
				sourceType:Camera.PictureSourceType.CAMERA,
				//sourceType:Camera.PictureSourceType.PHOTOLIBRARY,
				targetWidth:800,
				targetHeight:800
});
	console.log("Get Photo Start");
});

function onSuccess (imageDate){
	var image = $("#myimage");
	image.src = "data:image/jpeg;base64," + imageData;	
}
function onFail (message){
	var api = $("#api");
	api.innerHTML = "Failed: " + message;
}
*/


// End onDeviceReady()	
}






// Update Settings Function
function updateSettings(fullname,businessname,email,domainname){
		localStorage.setItem('fullname',fullname);
		localStorage.setItem('businessname',businessname);
		localStorage.setItem('email',email);
		localStorage.setItem('domainname',domainname);
		
		$("#popup-settings-fullname").val(fullname);
		$("#popup-settings-businessname").val(businessname);
		$("#popup-settings-email").val(email);
		$("#popup-settings-domainname").val(domainname);
}




//validate email function
function IsEmail(email) {
	  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  return regex.test(email);
}




// Send Email function
function sendEmail(testimonial,clientname,date){
	var fullname = $("#form-settings-fullname").val();
	var businessname = $("#form-settings-businessname").val();
	var email = $("#form-settings-email").val();
	var domainame = $("#form-settings-domainname").val();

            $.get("http://sitedini.com/ywp/phoneApp/ajax.php",
			        {
						testimonial: testimonial,
						clientname: clientname,
						date: date,
						fullname: fullname,
						businessname: businessname,
						email: email,
						domainame: domainame
						
					},
					function(data){
						console.log(data);
					}
			);
}









