

	var openModelButton=document.querySelector("#contactBtn");
	var modal=document.querySelector(".newWindow");
	var exitBtn=document.querySelector(".close1");
	
	openModelButton.addEventListener("click", function(){
		modal.classList.add("visible");
	})

	exitBtn.addEventListener("click", function(){
		modal.classList.remove("visible");
	})

	document.addEventListener("keyup", function(e){
		if(e.keyCode===27){
			modal.classList.remove("visible");
		}
	})