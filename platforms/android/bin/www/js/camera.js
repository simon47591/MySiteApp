$(document).ready(function(){
	document.addEventListener('deviceready', getCameraNow, false);
});
//$("#btn-from-gallery").click(
/*function getCameraNow(){
	console.log("Get Photo Start");
navigator.camera.getPicture(onSuccess, onFail, { 
				quality:50,
				destinationType:Camera.DestinationType.DATA_URL,
				//sourceType:Camera.PictureSourceType.CAMERA,
				sourceType:Camera.PictureSourceType.PHOTOLIBRARY,
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
}*/





function getCameraNow(){
$("#btn-from-gallery").on("click", function(e){
	alert("image uploading");
    e.preventDefault();
	e.stopPropagation();
	navigator.camera.getPicture(onSuccessImageAttachment, onFailImageAttachment,
		{quality:50,
		destinationType: Camera.DestinationType.FILE_URI,
		sourceType : Camera.PictureSourceType.CAMERA,
		//encodingType: navigator.camera.EncodingType.PNG,
		allowEdit: true,
		targetWidth: 200, targetHeight: 200});
		//targetWidth: 100, targetHeight: 150,
		//mediaType : Camera.MediaType.PICTURE
		//sourceType:navigator.camera.PictureSourceType.PHOTOLIBRARY});
    });

function onSuccessImageAttachment(imageData){
    window.alert("success");
    //window.alert("Prishah took Image successfully : " + imageData);
    window.location.href = "#orderAttachedLotImage";
    $("#imgAttachedLot").attr('src','data:image/jpeg;base64,' + imageData);
    //$("#imgAttachedLot").src = "data:image/jpeg;base64," +  imageData;
    //TODO : Insert new Image request to the server
    //TODO : Display Image
}
function onFailImageAttachment(failMsg) {
    window.alert("Failed to image uploading :" + failMsg);
}
}