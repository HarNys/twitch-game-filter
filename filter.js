
while(document.readyState !== "complete"){
	 setTimeout(function () {
	 	console.log(document.readyState);
    }, 1000);
}

var element = document.querySelectorAll('[original-title="League of Legends"]');
console.log(document.readyState);
console.log("DET FUNKER !!!!!!!");

/*for (var i = 0; i > element.length; i++) {
	var deleteME =element[i]; 
		while(!deleteME.classList.contains('qa-stream-preview') || !deleteME.tagName == "BODY") {
			deleteME = deleteME.parentNode;
		}
		if(deleteME.tagName == "BODY") {
			alert("error");
		} else {
			deleteME.style.display='none';
		}
}*/