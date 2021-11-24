
let carouselImages = ["yellow.jpg", "blue.jpg", "night.jpg"];
let currentIndex = 2;
let carouselIMG = document.getElementById("carouselIMG");


//for the select:
let groupSelect = document.getElementById("groupSelect");
let categorySelect = document.getElementById("categorySelect");


let changeSlide = function(){
	if(currentIndex === 0){
       carouselIMG.src = carouselImages[1];
       //currentIndex = 1;
	}
	else if(currentIndex === 1) {
         carouselIMG.src = carouselImages[2];
         //currentIndex = 2;
	}
	else {
		carouselIMG.src = carouselImages[0];
	   //currentIndex = 0;

	}
	if(currentIndex === 2) {
		currentIndex = 0;
	}
	else {
		currentIndex = currentIndex+1;
	}
}

let updateCategory = function(){
	console.log(groupSelect);
	
	let selectedValue = groupSelect.value
}



window.addEventListener("load", function(){
	// triggered once after 5 sec
	setTimeout(function(){
	prompt("WELCOME TO MY Interactive image carousel!",
		"my@email.com");
    }, 5000);


    //triggerec every 5 sec
    setInterval(changeSlide, 5000);

} )

groupSelect.addEventListener("change")